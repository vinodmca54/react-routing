import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

//These video series.
//https://www.youtube.com/watch?v=QFaFIcGhPoM

//https://www.youtube.com/watch?v=1w-oQ-i1XB8
// https://www.youtube.com/watch?v=ucd5x3Ka3gw

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter />
        {/* <Message></Message>
       <Greet name='Uma' heroName='Uma'>
          <p>This is children props</p>
        </Greet>
        <Greet name='Koijam' heroName='Koi'> 
          <button>Action</button>
        </Greet>
        <Welcome name='Uma' heroName='Uma' />
        <Welcome name='Koijam' heroName='Koi' />
        <Hello /> */}
      </div>
    );
  }
}

export default App;
