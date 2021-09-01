import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link, useHistory } from "react-router-dom";
import Pet from "../pet/Pet";

const SearchResult = () => {
  const searchedPets = useSelector((state) => state.pets.searchedPet);
  const history = useHistory();
  if (!searchedPets) {
    return <Redirect to="/explore" />;
  }
  return (
    <div className="container">
      <div className="row">
        <Link to="/explore" className="mt-3">
          back
        </Link>
        <div className="text-white my-5">
          <h1>Search Result:</h1>
        </div>

        {searchedPets.map((pet) => {
          return <Pet key={pet.id} pet={pet} />;
        })}
      </div>
    </div>
  );
};

export default SearchResult;
