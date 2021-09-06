import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { addUserDetails } from "../../redux/actions";
import CustomButton from "../custom-button/custom-button";
import InputField from "../inputField/InputField";

const AddressForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (address) => {
    dispatch(addUserDetails(address, history));
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-9">
        <div className="mb-sm-4">
          <div className="mb-5 h2">Adoption Form:</div>
          <form
            className="bg-light p-4 rounded-3 shadow text-dark"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="row">
              <div className="col-md-6">
                <Field
                  component={InputField}
                  type="text"
                  label="First Name"
                  name="firstName"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-md-6">
                <Field
                  component={InputField}
                  type="text"
                  label="Last Name"
                  name="lastName"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <Field
              component={InputField}
              type="text"
              label="Address"
              name="address"
              className="form-control form-control-lg"
            />
            <Field
              component={InputField}
              type="text"
              label="City"
              name="city"
              className="form-control  form-control-lg"
            />
            <Field
              component={InputField}
              type="text"
              label="State"
              name="state"
              className="form-control  form-control-lg"
            />
            <Field
              component={InputField}
              type="text"
              label="Zip Code"
              name="zipcode"
              className="form-control form-control-lg"
            />
            <div className="d-flex justify-content-between align-item-center text-white">
              <CustomButton
                className="btn bg-danger mt-4 w-25 p-2 text-white display-1"
                onClick={() => history.goBack()}
              >
                Cancel
              </CustomButton>
              <CustomButton
                className="btn bg-success mt-4 w-25 p-2 text-white"
                type="submit"
              >
                Next
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
const validate = (formvalues) => {
  const errors = {};
  if (!formvalues.address) {
    errors.address = "Required";
  }

  if (!formvalues.city) {
    errors.city = "Required";
  }
  if (!formvalues.state) {
    errors.state = "Required";
  }
  if (!formvalues.zipcode) {
    errors.zipcode = "Required";
  }
  return errors;
};
export default reduxForm({
  form: "reservationForm",
  validate,
})(AddressForm);
