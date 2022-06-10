import "./App.css";
import React from "react";
import { useState } from "react";
import Input from "../input";
import List from "../list";
import ListItem from "../listItem";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleChange(userInput) {
    setText(userInput);
  }

  function HandleClick() {
    const newList = text;
    setText("");
    setList([...list, newList]);
  }

  function deleteButton(list, index) {
    const deleteTask = index + 1;
    const newArray = [...list.slice(0, index), ...list.slice(deleteTask)];
    setList(newArray);
  }

  return (
    <main className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <div className="submitDiv">
          <Input
            text={text}
            handleChange={handleChange}
            placeHolder="Write a new task..."
          />
          <button className="submitButton" onClick={HandleClick}>
            Add +
          </button>
          <button
            className="clearButton"
            onClick={() => {
              setText("");
            }}
          >
            Clear -
          </button>
        </div>
        <List>
          <ListItem list={list} onClick={deleteButton} key={list} />
        </List>
      </header>
    </main>
  );
}

export default App;
