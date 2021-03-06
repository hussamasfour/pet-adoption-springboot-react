import React from "react";
const InputField = ({
  input,
  label,
  type,
  meta: { touched, error, submitFailed },
  ...customProps
}) => {
  return (
    <div className="form-outline form-white mb-3">
      <label className="form-label text-uppercase" htmlFor={label}>
        {label}
      </label>
      <input
        {...input}
        type={type}
        id={label}
        placeholder={label}
        {...customProps}
      />
      {touched && error && submitFailed && (
        <span className="bg-danger text-white">{error}</span>
      )}
    </div>
  );
};

export default InputField;
