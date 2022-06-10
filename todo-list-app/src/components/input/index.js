import React from "react";

function Input({ className, text, handleChange, placeHolder }) {
  return (
    <input
      className={className}
      value={text}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
      placeholder={placeHolder}
    ></input>
  );
}

export default Input;
