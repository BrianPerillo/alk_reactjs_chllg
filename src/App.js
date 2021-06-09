import './styles/main.css';
import './styles/cards.css';
import './styles/cards.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {React, useEffect, useState} from 'react';
import {getAllHeros, getHero} from './services/Hero';

import Card from './components/Card'
import Home from './components/Home'
import NavBar from './components/NavBar';

function App() {

  const [url, setUrl] = useState(``);
  const [loading, setLoading] = useState(true)
  
  // https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}



   useEffect(() => {

    async function fetchData(){

      let response = await getAllHeros(url);
      
      setLoading(false)

    
   } 

   }, [])

  return (

    <BrowserRouter>

      <Switch>
        
        {/* Ruta para la home/index - La Home contiene un ListadoCards, el cual a su vez contiene Cards */}
        <Route path="/">
          
          <NavBar></NavBar>
          
          {
            
            loading ? 

            <Home></Home>

            : 

            <p>Loading...</p>

          }


        </Route>

        


      </Switch>

    </BrowserRouter>

  );
}

export default App;
