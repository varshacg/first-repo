import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';

import MyCustomComponent from './MyCustomComponent' ;
function App() {
  
  const[company, setCompany] = useState('');
  const[name,setName] = useState();

  function handleChange(event){
      const textboxValue = event.target.value;
      console.log('text value changed', event, event.target, textboxValue);
      setCompany(textboxValue);
  }

  function handleChangeName(event){
    const textboxValue = event.target.value;
    console.log('text value changed', event, event.target, textboxValue);
    setName(textboxValue);
}

  function useEffectExample(){
    console.log('I am an example of useeffect');
  }
  useEffect(useEffectExample,[company]);
  return (
    <div className="App">

      <div>
        <MyCustomComponent name="varsha" company={company}/>
        <h1>Hello there {name},{company}</h1>
        Name: <input type="text" onChange={handleChangeName}/>
        Company: <input type="text" onChange={handleChange}/>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
