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

    }, [teamContext.deleteHeroBool])

    return ( 
        <Fragment>

            <div id="team-container" className="container">
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
                                <h2>team</h2>
                            </div>

                }
        
                {/*Si el equipo no está completo muestro botón para agregar personajes*/}

                {
                        teamContext.heros.length < 6 ?
                            <div className="col d-flex justify-content-center mt-5">
                                    <NavLink to={`/search`}>
                                        <button className="btn btn-propio">
                                            <a className="view-more">
                                                <i id="add-from-home-button" className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                                            </a>
                                        </button>
                                    </NavLink>
                            </div>

                        :

                            <span></span>
                }

                {/*Cargo los stats y personajes del Team*/}
                <div className='row'>


                    <div id="atributos" className='col-md-3'>

                        <div className="col">
                            
                            <h4>Team Stats</h4>

                            <hr/>

                            <div id="all-stats" className="row">

                                <div id="stats-first-col" className="col">
                                    <p style={{color:'red'}}><strong>Combat: <p>{teamContext.stats.combat}</p></strong></p>
                                    <p style={{color:'#1c98c2'}}><strong>Intelligence: <p>{teamContext.stats.intelligence}</p></strong> </p>
                                    <p style={{color:'green'}}><strong>Strength: <p>{teamContext.stats.strength}</p></strong></p>
                            
                                
                                    <p style={{color:'orange'}} className="col"><strong>Power: <p>{teamContext.stats.power}</p> </strong></p>
                                    <p style={{color:'#64d2f7'}} className="col"><strong>Speed: <p>{teamContext.stats.speed}</p></strong> </p>
                                    <p style={{color:'#4e4e4e'}} className="col"><strong>Durability: <p>{teamContext.stats.durability}</p></strong> </p>
                                </div>

                                <div id="stats-second-col" className="col">
                                    
                                    <p><strong>Peso promedio: {Math.round(teamContext.stats.weight/teamContext.teamLength)} kg </strong></p>
                                    <p><strong>Altura promedio: {Math.round(teamContext.stats.height/teamContext.teamLength)} cm </strong> </p>
                                </div>
                                
                            </div>

                            <hr/>

                            <h5>Main Stat: </h5>
                            <p className="col"><strong>{teamContext.maxStat.stat}</strong></p>
                            
                        </div>
                    </div>

                    <div className="col mt-5">   

                        <div className="row">
                            
                        {

                            teamContext.heros.map((hero) =>

                            <Card hero={hero.hero} teamView={true} size={'col-md-4 p-3'}/>

                            )
                            
                        }

                        </div>

                        {/*Cargo los stats del equipo*/}
                            
                    </div>
                </div> 
                   
            </div>   

        </Fragment>


     );
}
 
export default Team;
