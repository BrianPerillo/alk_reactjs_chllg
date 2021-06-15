import './styles/main.css';
import './styles/cards.css';
import './styles/detailcard.css';
import './styles/login.css';
import './styles/footer.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Fragment, React, useEffect, useState} from 'react';

import Card from './components/Card'
import Footer from './components/Footer';
import HeroDetail from './components/HeroDetail'
import Login from './components/Login';
import NavBar from './components/NavBar';
import SearchHero from './components/SearchHero'
import Team from './components/Team';
import {TeamProvider} from './context/TeamContext';
import {db} from './firebase';

function App() {

  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(true)


   useEffect(() => {

    

  }, [])

 
  return (

    <BrowserRouter>
      
      <Switch>

        <TeamProvider>

          {/* Ruta para la home/index - La Home contiene un ListadoCards, el cual a su vez contiene Cards */}
          <Route exact path="/">

            {
              //   login == false ? 
              //   <Login setLogin={setLogin}/>
              // : 
                <Fragment>
                  <NavBar></NavBar>
                  <Team/>
                  <Footer/>
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
                  <Footer/>
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
                  <Footer/>
                </Fragment>
            }

          </Route>


          </TeamProvider>

      </Switch>

    </BrowserRouter>

  );
}

export default App;
