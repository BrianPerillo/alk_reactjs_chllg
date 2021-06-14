import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from 'react'

import ListadoCards from '../components/ListadoCards'

const Team = (props) => {

    useEffect(() => {


        
    }, [])

    return ( 
        <Fragment>
            
        {
            props.heros.map((hero) =>
             <p>{hero.hero.name}</p>
            )
           
        }

        </Fragment>


     );
}
 
export default Team;
