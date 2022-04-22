import React, { Component } from 'react';
import Header from './Components/Header';
import pokemons from './data';
import Pokedex from './Components/Pokedex';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Pokedex pokemons={pokemons} />
      </div>
    )
  }
}

export default App;