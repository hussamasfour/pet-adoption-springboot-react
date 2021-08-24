import React from "react";
import { Link } from "react-router-dom";
import "./pet.css";

const Pet = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="ibox">
          <div className="ibox-content pet-box">
            <div className="pet-image"></div>
            <div className="pet-desc">
              <span className="pet-availabilty">Ave</span>
              <small className="pet-category small">Cat</small>
              <Link to="/pet/details" className="pet-name">
                Pilly
              </Link>
              <div className="small mt-2">
                Most adorable cat you can imagine. She is friendly and easy to
                deal withs.
              </div>
              <div className="mt-3 text-right">
                <Link to="/pet/details" className="btn btn-sm btn-success">
                  Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pet;
