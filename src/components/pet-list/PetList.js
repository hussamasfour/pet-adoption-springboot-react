import React from "react";
import { useSelector } from "react-redux";
import Pet from "../pet/Pet";

const PetList = () => {
  const petsList = useSelector((state) => state.pets.allPets);
  if (!petsList) {
    return <div>Please use Search bar to get Started </div>;
  }
  return (
    <div className="row">
      {petsList.map((pet) => {
        return <Pet key={pet.id} pet={pet} />;
      })}
    </div>
  );
};

export default PetList;
