import React, {Fragment, useContext} from 'react'

import {TeamContext} from '../context/TeamContext';

const Atributtes = (props) => {

    const teamContext = useContext(TeamContext) //guardo context
    

    return ( 
        
        <Fragment>
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

        </Fragment>


     );
}
 
export default Atributtes;
