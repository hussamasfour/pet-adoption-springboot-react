import React from "react";
import PetList from "../../components/pet-list/PetList";
import SearchBar from "../../components/search-bar/SearchBar";
import "./explore.css";

const Explore = () => {
  return (
    <div className="container">
      <SearchBar />
      <PetList />
    </div>
  );
};

export default Explore;
