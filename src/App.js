import './styles/main.css';
import './styles/cards.css';
import './styles/cards.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {React, useEffect, useState} from 'react';

import Card from './components/Card'
import Home from './components/Home'
import NavBar from './components/NavBar';

function App() {


   useEffect(() => {

  }, [])
  
  return (

    <BrowserRouter>

      <Switch>
        
        {/* Ruta para la home/index - La Home contiene un ListadoCards, el cual a su vez contiene Cards */}
        <Route path="/">
          
          <NavBar></NavBar>

              <Home/>

        </Route>

        


      </Switch>

    </BrowserRouter>

  );
}

export default App;
