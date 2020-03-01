import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header'
import Home from '../../Container/Home/Home'
import CurrentEventsPage from '../../Container/CurrentEventsPage/CurrentEventsPage'
import SearchPage from '../../Container/SearchPage/SearchPage'
import SavedPage from '../../Container/SavedPage/SavedPage'

function App() {
  return (
    <main className="App">
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/current' component={CurrentEventsPage} />
      <Route exact path='/search' component={SearchPage} />
      <Route exact path='/saved' component={SavedPage} />
    </main>
  );
}

export default App;
