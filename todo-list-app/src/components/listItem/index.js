import React from "react";

function ListItem({ data }) {
  for (let i = 0; i < data.length; i++) {
    return <li>{data[i]}</li>;
  }
}

export default ListItem;
