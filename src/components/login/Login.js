import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { fetchUser } from "../../redux/actions";
import CustomButton from "../custom-button/custom-button";
import InputField from "../inputField/InputField";
const Login = ({ handleSubmit }) => {
  const error = useSelector((state) => state.user.errorMessage);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (formValues) => {
    dispatch(fetchUser(formValues, history));
  };
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-item-center h-100 text-white">
        <div className="col-12 col-sm-12 col-md-8 col-xl-6 col-lg-6 shadow-lg m-5 py-5 bg-transparent border">
          <div className="p-5">
            <h1>Sign In</h1>
            <p>
              Dont you have an account yet? Sign up now.
              <Link to="/signup">Click</Link>
            </p>
            <span className="bg-danger">{error ? error : null}</span>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field
                type="text"
                component={InputField}
                id="username"
                name="username"
                label="Username"
                className="form-control form-control-lg"
              />
              <Field
                type="password"
                component={InputField}
                id="password"
                name="password"
                label="Password"
                className="form-control form-control-lg"
              />
              <div className="d-flex justify-content-center ">
                <CustomButton
                  type="submit"
                  className="btn btn-success px-5 my-4"
                >
                  Login
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "Required";
  }
  if (!formValues.password) {
    errors.password = "Required";
  }

  return errors;
};
export default reduxForm({
  form: "loginForm",
  validate,
})(Login);
