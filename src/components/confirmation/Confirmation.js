import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addUserDetails, reservePet } from "../../redux/actions";
import AddressForm from "../address-form/AddressForm";
import "./confirmation.css";

const Confirmation = () => {
  const selectedPet = useSelector((state) => state.pets.selectedPet);
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmitHandler = (values) => {
    dispatch(addUserDetails(values, history));
    dispatch(reservePet(selectedPet.id, history));
  };
  return (
    <div className="container d-lg-flex confirm-container">
      <div className="row">
        <div className="box-1 bg-light col-md-6">
          <div className="box-inner-1 pb-3 mb-3 ">
            <h3 className="mb-4 text-dark">Selected Pet:</h3>

            <div id="my" className="carousel slide carousel-fade ">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://i.imgur.com/ZTkt4I5.jpg"
                    className="d-block w-100 rounded"
                    alt="2"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-dark mt-3">{selectedPet.name}</h3>
            <p className="dis info my-3 text-dark">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate quos ipsa sed officiis odio
            </p>

            <div className="box py-1 ">
              <div className="d-flex align-items-start">
                <div className="course">
                  <div className="d-flex align-items-center justify-content-between ">
                    <span className="fw-bold "> Color </span>
                    <span className="fas ">{selectedPet.color}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="box py-1">
              <div className="d-flex align-items-start">
                <div className="course">
                  <div className="d-flex align-items-center justify-content-between ">
                    <span className="fw-bold">Gender</span>
                    <span className="fas ">
                      {selectedPet.gender.toLowerCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="box py-1">
              <div className="d-flex align-items-start">
                <div className="course">
                  <div className="d-flex align-items-center justify-content-between ">
                    <span className="fw-bold ">Age</span>
                    <span className="fas ">{selectedPet.age}</span>
                  </div>
                </div>
              </div>
            </div>
            <div for="one" className="box py-1">
              <div className="d-flex align-items-start">
                <div className="course">
                  <div className="d-flex align-items-center justify-content-between ">
                    <span className="fw-bold "> Weight</span>
                    <span className="fas ">{selectedPet.weight} lb</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="box py-1 ">
              <div className="d-flex align-items-start">
                <div className="course">
                  <div className="d-flex align-items-center justify-content-between ">
                    <span className="fw-bold "> Category</span>
                    <span className="fas ">{selectedPet.category.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-2 col-md-6">
          <div className="box-inner-2 text-dark">
            <div>
              <h3 className="">User Details:</h3>
              <p className="dis mb-3 mt-3">
                Complete your adoption by providing your location details
              </p>
            </div>
            <AddressForm onSubmitHandler={onSubmitHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
