import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { searchPets } from "../../redux/actions/petActions";
import "./searchBar.css";
const SearchBar = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const onSubmit = (formvalues) => {
    dispatch(searchPets(formvalues));
  };
  return (
    <div className="row justify-content-center my-5 ">
      <div className="col-xl-8 border search-box">
        <div className="p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row justify-content-center mb-3">
              <div className="col-xl-10">
                <label htmlFor="animal" className="text-white mb-1 lab">
                  Animal
                </label>
                <Field
                  component="select"
                  id="animal"
                  name="animal"
                  className="form-select p-3"
                >
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                </Field>
              </div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-xl-5 col-lg-6">
                <label htmlFor="city" className="text-white mb-1 lab">
                  City:
                </label>
                <Field
                  component="select"
                  id="city"
                  name="city"
                  className="form-select p-3"
                >
                  <option value="manhattan">Manhattan</option>
                  <option value="brooklyn">Brooklyn</option>
                  <option value="staten island">Staten Island</option>
                </Field>
              </div>
              <div className="col-xl-5  col-lg-6">
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
              <div className="col-xl-12 col-lg-6 text-center my-3">
                <button type="submit" className="btn btn-lg pet-btn">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "searchForm",
})(SearchBar);
