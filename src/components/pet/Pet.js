import React from "react";
import { useHistory } from "react-router-dom";
import CustomButton from "../custom-button/custom-button";
import "./pet.css";

const Pet = ({ pet }) => {
  const history = useHistory();
  console.log(pet);
  return (
    <div className="col-md-4 col-sm-6 col-lg-4 col-xl-3">
      <div className="card">
        <img
          src="https://i.imgur.com/ZTkt4I5.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{pet.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{pet.category.name}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-8">
              <CustomButton
                className="btn pet-btn px-3"
                onClick={() => {
                  history.push(`/pet/${pet.id}/details`);
                }}
              >
                Details
              </CustomButton>
            </div>
            <div className="col-xl-6 col-lg-3 align-items-center">
              {pet.location.city},{pet.location.state}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pet;
