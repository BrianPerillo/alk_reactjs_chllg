import './styles/main.css';
import './styles/cards.css';
import './styles/cards.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {React, useEffect, useState} from 'react';

import Card from './components/Card'
import NavBar from './components/NavBar';
import SearchHero from './components/SearchHero'
import Team from './components/Team';

function App() {


   useEffect(() => {

  }, [])
  
  return (

    <BrowserRouter>
      
      <Switch>
        
        {/* Ruta para la home/index - La Home contiene un ListadoCards, el cual a su vez contiene Cards */}


        <Route exact path="/">
          
          <NavBar></NavBar>
          <Team/>

        </Route>

        <Route path="/search">
          
          <NavBar></NavBar>
          <SearchHero/>

        </Route>



      </Switch>

    </BrowserRouter>

  );
}

export default App;
