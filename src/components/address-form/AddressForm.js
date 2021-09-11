import React from "react";
import { Field, reduxForm } from "redux-form";
import CustomButton from "../custom-button/custom-button";
import InputField from "../inputField/InputField";

const AddressForm = ({ handleSubmit, onSubmitHandler }) => {
  const onSubmit = (userDetails) => {
    onSubmitHandler(userDetails);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Field
          className="form-control form-control-lg"
          type="text"
          component={InputField}
          label="First Name"
          name="firstName"
        />
      </div>
      <div className="mb-4">
        <Field
          type="text"
          className="form-control form-control-lg"
          label="Last Name"
          name="lastName"
          component={InputField}
        />
      </div>

      <div className="mb-4">
        <Field
          className="form-control form-control-lg"
          type="text"
          name="street"
          label="Street"
          component={InputField}
        />
      </div>
      <div className="mb-3">
        <div className="row">
          <div className="col-md-6">
            <Field
              className="form-control form-control-lg"
              type="text"
              label="City"
              name="city"
              component={InputField}
            />
          </div>
          <div className="col-md-6">
            <Field
              className="form-control form-control-lg"
              type="text"
              label="State"
              name="state"
              component={InputField}
            />
          </div>
        </div>
      </div>
      <div className="mb-1">
        <Field
          className="form-control form-control-lg"
          type="text"
          label="Zip Code"
          name="zipcode"
          component={InputField}
        />
      </div>
      <div className="d-flex flex-column ">
        <CustomButton className="btn btn-primary mt-4" type="submit">
          Adopt
        </CustomButton>
      </div>
    </form>
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
