import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from 'react'

import FormHero from './FormHero'
import ListadoCards from './ListadoCards'
import axios from 'axios';

const SearchHero = () => {

    const [baseUrl, setBaseUrl] = useState(`https://www.superheroapi.com/api.php/10209071625985776/`);
    const [heros, setHeros] = useState([]);
    const [loading, setLoading] = useState(true)

    const [allHeros, setAllHeros] = useState(true)

    function agregarHero(hero){

        setHeros((heros) => heros.concat(hero));
    
    }

    const getAllHeros = async (url, agregarHero) => {

        for (let index = 1; index <= 8; index++) {
            const res = await axios.get(baseUrl + index)
            .then(res => agregarHero(res.data))
            // console.log(res.data);
            // console.log("heros" + heros);
        };

    }

    useEffect(() => {

        if(allHeros == true){
            getAllHeros(baseUrl, agregarHero);
        }

        setLoading(false)
        
    }, [])

    
    
    return ( 
        
        <Fragment> 

                <FormHero/>
                
                {
                    heros.length < 8 ?
                   
                    <p>Loading ...</p>
                    
                    : 

                    <ListadoCards heros={heros}/>  
                }

        </Fragment>


     );
}
 
export default SearchHero;
