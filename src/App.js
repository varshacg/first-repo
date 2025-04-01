import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import MyCustomComponent from './MyCustomComponent' ;
import { useSelector,useDispatch } from 'react-redux';

/* function Home(){
   return <h1>Home Page</h1>;
}

function About(){
  return <h1>About Page</h1>;
}

function Contact(){
  return <h1>Contact Page</h1>;
} */
 
function App() {
   
  const count= useSelector((state)=>state.count);
  const dispatch= useDispatch();
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
    /* <Router>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link> 
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router> */
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h1>Simple Redux Counter</h1>
      <h2>Count:{count}</h2>
      <button onClick={()=>dispatch({type: "INCREMENT"})}>Increase</button>
      <button onClick={()=>dispatch({type: "DECREMENT"})}>Decrease</button>
    </div>
    /* <div className="App">

      <div>
        <MyCustomComponent name="varsha" company={company}/>
        <h1>Hello there {name},{company}</h1>
        Name: <input type="text" onChange={handleChangeName}/>
        Company: <input type="text" onChange={handleChange}/>
      </div>

      
    </div> */
  );
}

export default App;
