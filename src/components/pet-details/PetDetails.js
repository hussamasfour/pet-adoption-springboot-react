import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPetById } from "../../redux/actions";
import "./petDetails.css";

const PetDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const pet = useSelector((state) => state.pets.selectedPet);
  console.log(pet);

  useEffect(() => {
    dispatch(fetchPetById(params.id));
  }, [params.id, dispatch]);

  if (!pet) {
    return <div>ehe</div>;
  }
  return (
    <div className="container">
      <div className="row my-5 text-white bg-dark border-md">
        <div className="col-md-6 mb-4 mb-md-0 px-sm-0 ">
          <img
            src="https://i.imgur.com/ZTkt4I5.jpg"
            className="pet-image"
            alt="pet"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h5>{pet.name}</h5>
          <p className="mb-2 text-muted text-uppercase small">
            {pet.category.name}
          </p>

          <h5 className="mt-4">My Story:</h5>
          <p className="pt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim
            perferendis voluptates laboriosam. Distinctio, officia quis dolore
            quos sapiente tempore alias.
          </p>
          <h5>Facts about me:</h5>
          <table className="table  mb-0  text-white">
            <tbody>
              <div className="row">
                <div className="col-sm-6">
                  <tr>
                    <th className="py-2  col-sm-3" scope="row">
                      <strong>Color:</strong>
                    </th>
                    <td className="py-2 col-sm-3 text-muted">{pet.color}</td>
                  </tr>
                  <tr>
                    <th className="py-2 col-sm-3" scope="row">
                      <strong>Age: </strong>
                    </th>
                    <td className="py-2 col-sm-3 text-muted">{pet.age}</td>
                  </tr>
                  <tr>
                    <th className="py-2 col-sm-3" scope="row">
                      <strong>Sex: </strong>
                    </th>
                    <td className="py-2 col-sm-3 text-muted">
                      {pet.gender.toLowerCase()}
                    </td>
                  </tr>
                </div>
                <div className="col-sm-6">
                  <tr>
                    <th className="py-2 col-sm-3" scope="row">
                      <strong>Status:</strong>
                    </th>
                    <td className="py-2 col-sm-3 text-success">Avalable</td>
                  </tr>
                  <tr>
                    <th className="py-2 col-sm-3" scope="row">
                      <strong>Weight: </strong>
                    </th>
                    <td className="py-2 col-sm-3 text-muted">
                      {pet.weight} lb
                    </td>
                  </tr>
                </div>
              </div>
            </tbody>
          </table>
          <hr />
          <div className="d-flex  justify-content-around mb-3 align-item-center">
            <div className="">
              <Link to="/reserve" className="btn pet-btn btn-md px-5  mb-2">
                Adopt
              </Link>
            </div>
            <div className="">
              <Link
                to="/search"
                className="btn btn-light btn-lg mr-1 px-5 mb-2"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
