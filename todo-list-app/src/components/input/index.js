import React from "react";

function Input({ text, handleChange, placeHolder }) {
  return (
    <input
      value={text}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
      placeholder={placeHolder}
    ></input>
  );
}

export default Input;
