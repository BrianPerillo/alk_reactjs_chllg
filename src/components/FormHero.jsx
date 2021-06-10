import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from 'react'

import ListadoCards from './ListadoCards'

// import {getAllHeros, getHero} from '../services/Hero';



const FormHero = () => {

    useEffect(() => {


    }, [])


    return ( 
        
        <Fragment> 
            
                <form className="col-md-8 mx-auto m-4">
                    <div className="row justify-content-center">
                        <div className="col-md-5 mr-2"> 
                            <input className="form-control my-2 p-2" type="text" name="name" placeholder="Buscar por Nombre"/>
                        </div>
                    </div>
                </form>

        </Fragment>


     );
}
 
export default FormHero;

