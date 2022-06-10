import "./App.css";
import React from "react";
import {useState} from "react";
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
        setList([
            ...list,
            newList
        ]);
    }
    

    return (
        <main className="App">
            <header className="App-header">
                <h1>ToDo List</h1>
                <Input text={text}
                    handleChange={handleChange}
                    placeHolder="Write a new task..."/>
                <button onClick={HandleClick}>add to list</button>
                <List>
                    <ListItem data={list}
                        key={list}/>
                </List>
               
    
            </header>
        </main>
    );
}

export default App;
