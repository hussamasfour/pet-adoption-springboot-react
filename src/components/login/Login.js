import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { fetchUser } from "../../redux/actions";
const Login = ({ handleSubmit }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (formValues) => {
    dispatch(fetchUser(formValues, history));
  };
  return (
    <div className="row d-flex justify-content-center align-item-center h-100 text-white">
      <div className="col-12 col-md-8 col-xl-6 col-lg-6 shadow-lg m-5 py-5 bg-transparent ">
        <div className="p-5">
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-outline py-4">
              <Field
                type="text"
                component="input"
                id="username"
                name="username"
                placeholder="Username"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="username">
                Username
              </label>
            </div>
            <div className="form-outline py-4">
              <Field
                type="text"
                id="password"
                component="input"
                name="password"
                placeholder="Password"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="password">
                Password
              </label>
            </div>

            <button type="submit" className="btn btn-primary ">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "loginForm",
})(Login);
