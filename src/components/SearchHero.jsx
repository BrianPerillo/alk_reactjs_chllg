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

    const [loadFirsts, setLoadFirsts] = useState(false)

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

        /* 
        Arracno limpiando el array heros ( setHeros([]) ) - Si se realiza una búsqueda por nombre, y luego se vacía el input, se ejecuta este useEffect 
        (por que se modifica el loadFirsts desde el FormHero) y para que no concatene sino que vuelva a mostrar los resultados originales, se vacía el array.
        */ 

        setHeros([])

        getAllHeros(baseUrl, agregarHero);
        console.log("heros_seteados" + heros);

        setLoading(false)
        
        
    }, [loadFirsts])

    
    
    return ( 
        
        <Fragment> 

                <FormHero setHeros={setHeros} setLoadFirsts={setLoadFirsts} loadFirsts={loadFirsts}/>
                
                {
                    heros.length > 0 ?
                    
                        <ListadoCards heros={heros}/>  
                    
                    : 

                        <p>Loading ...</p>
                }

        </Fragment>


     );
}
 
export default SearchHero;
