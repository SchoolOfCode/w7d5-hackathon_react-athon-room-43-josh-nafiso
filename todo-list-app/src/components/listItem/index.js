import React from "react";

function ListItem({ data }) {
  let returnArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].length > 0) {
      returnArray.push(<li>{data[i]}</li>);
    }
  }
  return returnArray;
}

export default ListItem;
