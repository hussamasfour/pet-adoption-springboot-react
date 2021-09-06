import adoptionApi from "./adoptionApi";
import TokenService from "../utils/tokenService";
import { refreshToken } from "../redux/actions";

const setup = (store) => {
  adoptionApi.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const { dispatch } = store;

  adoptionApi.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig.url !== "/login" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await adoptionApi.post("/refreshtoken", {
              refreshToken: TokenService.getLocalRefreshToken(),
            });

            const { accessToken } = rs.data;

            dispatch(refreshToken(accessToken));
            TokenService.updateLocalAccessToken(accessToken);

            return adoptionApi(originalConfig);
          } catch (error) {
            localStorage.removeItem("user");

            return Promise.reject(error);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;
