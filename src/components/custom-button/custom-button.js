import React from "react";
import "./custom-button.css";
const CustomButton = ({ type, children, ...otherProps }) => {
  return (
    <button type={type} {...otherProps} className="btn pet-btn px-3">
      {children}
    </button>
  );
};

export default CustomButton;
