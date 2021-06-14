import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useEffect, useState, useContext} from 'react'
import {db} from '../firebase';
import Card from './Card'

import ListadoCards from '../components/ListadoCards'
import {TeamContext} from '../context/TeamContext';

const Team = (props) => {

    const teamContext = useContext(TeamContext) //guardo context

    useEffect(() => {

        teamContext.getTeam() // Cada vez que se cargue este componente consulta el team    
        teamContext.getTeamSize();

    }, [])

    return ( 
        <Fragment>

            <div className="container">
                <div className="row">   
                <p>{teamContext.teamLength}</p>
                    {

                        teamContext.heros.map((hero) =>

                         <Card hero={hero.hero} teamView={true} />

                        )
                    
                    }
                </div> 
            </div>   

        </Fragment>


     );
}
 
export default Team;
