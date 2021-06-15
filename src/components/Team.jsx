import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch,
    NavLink
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
        teamContext.getTeamSize()
        teamContext.setMessage('')
        teamContext.getStats()

        console.log('log desde el team component');
        console.log(teamContext.stats);
    }, [teamContext.deleteHeroBool])

    return ( 
        <Fragment>

            <div className="container">
                {/* Alert */}

                    {
                            teamContext.message.length>0 ?

                            <div class="alert alert-danger alert-dismissible fade show mt-5" role="alert">
                                <strong>{teamContext.message}</strong>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                                :

                                <div></div>
                    }

                {/* Fin Alert */}
                <div className="col d-flex justify-content-center mt-5">
                        <h2>Atributos del equipo Equipo: </h2>
                </div>

                {
                        teamContext.loading == false ?
                        <div>

                            <div className="row">
                                <p className="col">Combat: {teamContext.stats.combat}</p>
                                <p className="col">Intelligence: {teamContext.stats.intelligence} </p>
                                <p className="col">Strength: {teamContext.stats.strength} </p>
                                <p className="col">Power: {teamContext.stats.power} </p>
                                <p className="col">Speed: {teamContext.stats.speed} </p>
                                <p className="col">Durability: {teamContext.stats.durability} </p>
                            </div>

                            <div className="col">
                                <h4>Atributos Principal: </h4>
                                <p className="col">{teamContext.maxStat.stat}: {teamContext.maxStat.power} </p>
                            </div>

                        </div>

                        :

                        <p>Loading...</p>
                }

                {
                        teamContext.heros.length < 6 ?
                            <div className="col d-flex justify-content-center mt-5">
                                    <NavLink to={`/search`}>
                                        <button className="btn btn-primary">Agregar Hero</button>
                                    </NavLink>
                            </div>

                        :

                            <span></span>
                }

                <div className="row mt-5">   
                {/* <p>{teamContext.teamLength}</p> */}
                   
                    {

                        teamContext.heros.map((hero) =>

                         <Card hero={hero.hero} teamView={true} />

                        )
                    
                    }
                </div>

                <div id="teamStats">

                {/* {
                    teamContext.state.map((state) =>
                        <p>{state}</p>
                    )
                } */}

                </div>
            </div>   

        </Fragment>


     );
}
 
export default Team;
