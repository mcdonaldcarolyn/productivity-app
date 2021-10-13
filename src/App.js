import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TodoCard from './Components/TodoCard';
import { Header } from './Components/Header';
import { Timer } from './Components/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Header/>
        <TodoCard />
        <Timer/>
        <p>
          Let's make a producitivity app super fun
        </p>``
        
      </header>
      
    </div>
  );
}

export default App;
