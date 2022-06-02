import logo from './logo.svg';
import './App.css';
import Characters from './MyComponents/characters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRandom} from '@fortawesome/free-solid-svg-icons'

function App() {
  let [characters, setCharacters] = useState([]);
  let [random, setRandom] = useState([]);
  
  let arr = [];
  let noOfCards = 12;
  const API = `https://rickandmortyapi.com/api/character/${randomNum()}`;
  

  function randomNum() {
    for(let i = 0; i < noOfCards; i++){
      let num = Math.floor(Math.random() * (826) + 1);
      arr.push(num);
    }
    return arr
  }

useEffect(() => {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setCharacters(data);
    })
},[random])


  return (
    <div className="main">
      <h1>Rick and Morty</h1>
      <div className="triangle"></div>

      <button className='btn' onClick={setRandom}>
        <span className='btn_icon'><FontAwesomeIcon icon={faRandom} /></span>
        <span className='btn_text'>Randomize</span>
      </button>
      
      <div className='container'>
        {characters.length > 0 && characters.map(
          (character) => 
          <Characters key={character.id} {...character}/>
        )}
      </div>
    </div>
  );
}

export default App;
