import React from "react";
const CustomButton = ({ type, children, ...otherProps }) => {
  return (
    <button type={type} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
