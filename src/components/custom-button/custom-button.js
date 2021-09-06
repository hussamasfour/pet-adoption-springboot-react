import React from "react";
import "./custom-button.css";
const CustomButton = ({ type, children, ...otherProps }) => {
  return (
    <button type={type} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
