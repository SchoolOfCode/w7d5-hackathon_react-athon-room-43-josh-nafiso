import "./App.css";
import React from "react";
import { useState } from "react";
import Input from "../input";

function App() {
  const [text, setText] = useState("");

  function handleChange(userInput) {
    setText(userInput);
    console.log(text);
  }

  return (
    <main className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <Input
          text={text}
          handleChange={handleChange}
          placeHolder="Write a new task..."
        />
      </header>
    </main>
  );
}

export default App;
