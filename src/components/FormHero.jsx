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


const FormHero = (props) => {


    const [baseUrl, setBaseUrl] = useState(`https://www.superheroapi.com/api.php/10209071625985776/search/`);
    const [name, setName] = useState('');
    const [filteredHeros, setFilteredHeros] = useState([])


    const handleOnChange = async (e) => {
    
        const name = e.target.value
        getHeros(baseUrl, name);

    }
    
    const getHeros = async (url, name) => {
    
        const res = await axios.get(baseUrl + name)
        .then(
            res => res.data.response == 'success' ?
                props.setHeros(res.data.results)
            :
                props.setLoadFirsts(prevloadFirsts => !prevloadFirsts)
            )
    
    }
    
    useEffect(() => {

        
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
                
        </Fragment>


     );
}
 
export default FormHero;

