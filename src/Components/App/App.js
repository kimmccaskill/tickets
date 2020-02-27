import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header'
import Home from '../Home/Home'

function App() {
  return (
    <main className="App">
      <Header />
      <Route exact path='/' component={Home} />
    </main>
  );
}

export default App;
