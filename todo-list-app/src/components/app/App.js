import "./App.css";
import React from "react";
import {useState} from "react";
import Input from "../input";

function App() {
    const [text, setText] = useState("");

    function handleChange(userInput) {
        setText(userInput);
        // console.log(text);
    }
    const [list, setList] = useState([])
    function HandleClick() {
        const newList = text
        console.log(newList);
        setText("")
        setList(newList)

    }
    // let getValue = (i, e) => {
    //   let newInput = [...input];
    //   newInput[i][e.target.name] = e.target.value;
    //   setInput(newInput);
    // }

    return (
        <main className="App">
            <header className="App-header">
                <h1>ToDo List</h1>
                <Input text={text}
                    handleChange={handleChange}
                    placeHolder="Write a new task..."/>
                <button onClick={HandleClick}>
                    add to list
                </button>
             
                    <li>{list}</li>
            
            </header>
        </main>
    );
}

export default App;
