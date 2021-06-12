import './styles/main.css';
import './styles/cards.css';
import './styles/detailcard.css';
import './styles/login.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Fragment, React, useEffect, useState} from 'react';

import Card from './components/Card'
import HeroDetail from './components/HeroDetail'
import Login from './components/Login';
import NavBar from './components/NavBar';
import SearchHero from './components/SearchHero'
import Team from './components/Team';

function App() {

  const [login, setLogin] = useState(false)

   useEffect(() => {

  }, [])
  
  return (

    <BrowserRouter>
      
      <Switch>
        
        {/* Ruta para la home/index - La Home contiene un ListadoCards, el cual a su vez contiene Cards */}


        <Route exact path="/">

          {
              login == false ? 
              <Login setLogin={setLogin}/>
            : 
              <Fragment>
                <NavBar></NavBar>
                <Team/>
              </Fragment>
          }

        </Route>

        <Route path="/search">

          {
              login == false ? 
              <Login setLogin={setLogin}/>
            : 
              <Fragment>
                <NavBar></NavBar>
                <SearchHero/>
              </Fragment>
          }

        </Route>

        <Route path="/hero_detail/:id">

          {
              login == false ? 
                <Login setLogin={setLogin}/>
            : 
              <Fragment>
                <NavBar></NavBar>
                <HeroDetail/>
              </Fragment>
          }

        </Route>



      </Switch>

    </BrowserRouter>

  );
}

export default App;
