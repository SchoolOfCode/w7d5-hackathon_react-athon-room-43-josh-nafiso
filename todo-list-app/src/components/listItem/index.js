import React from "react";

function ListItem({ data }) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].length > 0) {
      return <li>{data[i]}</li>;
    }
  }
}

export default ListItem;
