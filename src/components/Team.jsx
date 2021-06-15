import {
    Link,
    NavLink,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useContext, useEffect, useState} from 'react'

import Card from './Card'
import ListadoCards from '../components/ListadoCards'
import {TeamContext} from '../context/TeamContext';
import {db} from '../firebase';

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

                {/*Muestro atributo principal*/}

                {
                        teamContext.loading == false ?
                        
                            <div className="col d-flex justify-content-center mt-5">
                                <h2> {teamContext.maxStat.stat} team</h2>
                            </div>
                        : 

                            <div className="col d-flex justify-content-center mt-5">
                                <h2>Cargando atributo principal...</h2>
                            </div>

                }
        
                {/*Si el equipo no está completo muestro botón para agregar personajes*/}

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

                {/*Cargo los personajes del team*/}
                <div className="row mt-5">   
                   
                    {

                        teamContext.heros.map((hero) =>

                         <Card hero={hero.hero} teamView={true} />

                        )
                    
                    }

                    {/*Cargo los stats del equipo*/}
                    <div className="col-md-3">
                    { 
                        teamContext.teamLength > 0 ?

                        <div id="atributos">

                                <div className="col">
                                    <h4>Team Stats</h4>
                                    <hr />
                                    <h5>Main Stat: </h5>
                                    <p className="col"><strong>{teamContext.maxStat.stat}</strong></p>

                                    <hr/>

                                    <div id="all-stats" className="row">
                                        <div className="col mb-2">
                                            <h5>Other Stats: </h5>
                                        </div>
                                        
                                        <div className="col">
                                            <p style={{color:'red'}}><strong>Combat: {teamContext.stats.combat}</strong></p>
                                            <p style={{color:'#1c98c2'}}><strong>Intelligence: {teamContext.stats.intelligence}</strong> </p>
                                            <p style={{color:'green'}}><strong>Strength: {teamContext.stats.strength}</strong> </p>
                                        </div>
                                        <div className="col">
                                            <p style={{color:'orange'}} className="col"><strong>Power: {teamContext.stats.power}</strong> </p>
                                            <p style={{color:'#64d2f7'}} className="col"><strong>Speed: {teamContext.stats.speed}</strong> </p>
                                            <p style={{color:'#4e4e4e'}} className="col"><strong>Durability: {teamContext.stats.durability}</strong> </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            :

                             <p></p>
                        
                        
                        }
                    </div>
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
