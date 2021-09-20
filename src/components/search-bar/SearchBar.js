import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { searchPets } from "../../redux/actions/petActions";
import CustomButton from "../custom-button/custom-button";
import "./searchBar.css";
const SearchBar = ({ handleSubmit, error }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(error);
  const onSubmit = (formvalues) => {
    dispatch(searchPets(formvalues, history));
  };
  return (
    <div className="row justify-content-center my-5 ">
      <div className="col-xl-9">
        <div className="border py-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row justify-content-center mb-3">
              <div className="col-sm-10">
                <label htmlFor="animal" className="text-white mb-1 lab">
                  Animal
                </label>
                <Field
                  component="select"
                  id="animal"
                  name="animal"
                  className="form-select p-3"
                >
                  <option value="">Select</option>

                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                </Field>
              </div>
            </div>

            <div className="row mb-4 justify-content-center ">
              <div className=" col-md-10 col-xl-5 col-sm-10 mb-md-3 mb-sm-3">
                <label htmlFor="city" className="text-white mb-1 lab">
                  City:
                </label>
                <Field
                  component="select"
                  id="city"
                  name="city"
                  className="form-select p-3"
                >
                  <option value="">Select</option>
                  <option value="manhattan">Manhattan</option>
                  <option value="brooklyn">Brooklyn</option>
                  <option value="staten island">Staten Island</option>
                </Field>
              </div>

              <div className="col-xl-5 col-lg-10 col-sm-10 ">
                <label htmlFor="age" className="text-white mb-1 lab">
                  Age:
                </label>

                <Field
                  component="select"
                  id="age"
                  name="age"
                  className="form-select p-3"
                >
                  <option value="">Select</option>
                  <option value="puppy">Puppy</option>
                  <option value="young">Young</option>
                  <option value="adult">Adult</option>
                </Field>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-6 text-center my-2">
                <CustomButton type="submit" className="btn pet-btn btn-lg">
                  Search
                </CustomButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.city) {
    errors.city = "required";
  }
};

export default reduxForm({
  form: "searchForm",
  validate,
})(SearchBar);
