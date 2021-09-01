import React from "react";
import { useSelector } from "react-redux";
import Pet from "../pet/Pet";

const PetList = () => {
  const petsList = useSelector((state) => state.pets.allPets);
  return (
    <div className="row">
      <h2 className="text-white mb-4">Featured Pets:</h2>
      {petsList
        .filter((pet, idx) => idx < 4)
        .map((pet) => {
          return <Pet key={pet.id} pet={pet} />;
        })}
    </div>
  );
};

export default PetList;
