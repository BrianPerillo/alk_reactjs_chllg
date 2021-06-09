import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from 'react'

import Card from '../components/Card';

const ListadoCards = (props) => {


useEffect(() => {
    
    

}, [])

console.log(props.pokemonData);

    return ( 
        
        <Fragment>
                  
            <Card />

        </Fragment>


     );
}
 
export default ListadoCards;
