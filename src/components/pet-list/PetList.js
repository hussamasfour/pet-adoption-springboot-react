import React from "react";
import Pet from "../pet/Pet";

const PetList = () => {
  // const petList  = useSelector(state => state.pet.petList);
  // if(!petList){
  //     return <div>Please use Search bar to get Started </div>
  // }
  return (
    <div>
      <Pet />
    </div>
  );
};

export default PetList;
