//Animal app to demo state, events
import "./App.css"
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "heart", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App  () {
    const [animals, setAnimals] = useState([]);
    
    const handleClick = () => {
       setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
      return <AnimalShow type={animal} key={index} />
    })

  return (
    <div className="app">
      <button className="btn" onClick={handleClick}>Add Animal</button>
      <div className="animals-list">{renderedAnimals}</div>
    
    </div>
  );
}

export default App
