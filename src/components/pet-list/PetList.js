import React from "react";
import { useSelector } from "react-redux";
import Pet from "../pet/Pet";
import SearchBar from "../search-bar/SearchBar";

const PetList = () => {
  const petsList = useSelector((state) => state.pets.allPets);
  if (!petsList) {
    return <div>Please use Search bar to get Started </div>;
  }
  return (
    <div className="row">
      <SearchBar />

      <div className="row">
        <h2 className="text-white mb-4">Featured Pets:</h2>
        {petsList.map((pet) => {
          return <Pet key={pet.id} pet={pet} />;
        })}
      </div>
    </div>
  );
};

export default PetList;
