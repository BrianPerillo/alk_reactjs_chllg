import {
    Link,
    NavLink,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useContext, useEffect, useState} from 'react'

import Atributtes from '../components/Atributtes'
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


                    <Atributtes/>

                    <div className="col mt-5">   

                        <div className="row">
                            
                        {

                            teamContext.heros.map((hero) =>

                            <Card hero={hero.hero} teamView={true} size={'col-sm-6 col-md-6 col-xl-4 p-3'}/>

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
