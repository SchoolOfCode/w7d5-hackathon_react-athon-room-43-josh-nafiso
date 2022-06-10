import React from "react";

function ListItem({ list, onClick }) {
  let returnArray = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].length > 0) {
      returnArray = [
        ...returnArray,
        <li key={i}>
          {list[i]}
          <button
            className="deletebutton"
            onClick={() => {
              onClick(list, i);
            }}
          >
            Delete
          </button>
        </li>,
      ];
    }
  }
  return returnArray;
}

export default ListItem;
