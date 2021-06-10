import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from 'react'

import ListadoCards from './ListadoCards'
import axios from 'axios';

// import {getAllHeros, getHero} from '../services/Hero';


const FormHero = () => {


    const [baseUrl, setBaseUrl] = useState(`https://www.superheroapi.com/api.php/10209071625985776/search/`);
    const [name, setName] = useState('');
    const [filteredHeros, setFilteredHeros] = useState([])


    const handleOnChange = (e) => {
    
        setName(e.target.value)
        
    }
    
    const getHeros = async (url, name) => {
    
        const res = await axios.get(baseUrl + name)
        .then(res => setFilteredHeros(res.data.results))
    
    }
    
    useEffect(() => {

        getHeros(baseUrl, name)
        console.log(baseUrl + name);
        console.log('Filtered Heros' + filteredHeros);
    }, [name])


    return ( 
        
        <Fragment> 
            
                <form className="col-md-8 mx-auto m-4">
                    <div className="row justify-content-center">
                        <div className="col-md-5 mr-2"> 
                            <input className="form-control my-2 p-2" type="text" name="name" placeholder="Buscar por Nombre" onChange={handleOnChange}/>
                        </div>
                    </div>
                </form>
                
                {
                    filteredHeros != null ?

                        filteredHeros.map((hero) =>

                            <p>{hero.name}</p>
                        
                        )

                    :

                        <p></p>
                }
                

        </Fragment>


     );
}
 
export default FormHero;

