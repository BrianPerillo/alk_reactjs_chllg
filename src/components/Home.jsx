import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from 'react'
import {getAllHeros, getHero} from '../services/Hero';

import ListadoCards from '../components/ListadoCards'

const Home = () => {

    const [baseUrl, setBaseUrl] = useState(`https://www.superheroapi.com/api.php/10209071625985776/`);
    const [heros, setHeros] = useState([]);
    const [loading, setLoading] = useState(true)

    function agregarHero(hero){

        setHeros((heros) => heros.concat(hero));
    
    }
    
    const fetchData = async (url) => {
          
        getAllHeros(url, agregarHero);
    
    }

    useEffect(() => {

        fetchData(baseUrl);
        setLoading(false)


    }, [])

    console.log(heros);
    
    return ( 
        
        <Fragment>
                
            {   
                !loading ?

                <div className="row d-flex justify-content-center m-auto">

                    <ListadoCards heros={heros}/>

                </div>

                : 

                <div className="row d-flex justify-content-center m-auto">

                    <p>Loading...</p>

                </div>

            }

        </Fragment>


     );
}
 
export default Home;
