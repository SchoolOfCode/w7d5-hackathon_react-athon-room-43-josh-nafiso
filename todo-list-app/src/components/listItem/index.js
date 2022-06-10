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

// function deleteButon(list,index) {
//   const deleteTask = index +1 ;
//   const newArray = [
//       ... list.slice(0, index),
//       ... list.slice(deleteTask)
//   ];
//   return newArray;
// }
export default ListItem;
