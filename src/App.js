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
import {db} from './firebase';

function App() {

  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [heros, setHeros] = useState([])

  const getTeam = async () => {

    db.collection('heros').onSnapshot((querySnapshot) => {
     querySnapshot.forEach((doc) => {
       var hero = doc.data()
       hero.hero.doc_id = doc.id
      //  console.log("herooo" + hero.hero.doc_id);
       console.log(hero)
       setHeros((heros) => heros.concat(hero))
     });
     setLoading(false)
    });
    
   } 

   useEffect(() => {

    getTeam();
   

  }, [])

  // if(){
  //   console.log("team" + team.hero.name);
  // }

  return (

    <BrowserRouter>
      
      <Switch>
        
        {/* Ruta para la home/index - La Home contiene un ListadoCards, el cual a su vez contiene Cards */}


        <Route exact path="/">

          {
            //   login == false ? 
            //   <Login setLogin={setLogin}/>
            // : 
              <Fragment>
                <NavBar></NavBar>
                <Team heros={heros}/>
              </Fragment>
          }

        </Route>

        <Route path="/search">

          {
            //   login == false ? 
            //   <Login setLogin={setLogin}/>
            // : 
              <Fragment>
                <NavBar></NavBar>
                <SearchHero/>
              </Fragment>
          }

        </Route>

        <Route path="/hero_detail/:id">

          {
            //   login == false ? 
            //     <Login setLogin={setLogin}/>
            // : 
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
