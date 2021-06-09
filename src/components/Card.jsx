import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment} from 'react'

const Card = (props) => {

    // //Tomo el nombre del pokemon desde la prop que recibo:
    // const nombre = props.pokemon.forms.map(nombre => {
    //     return (nombre.name)
    // })
    // console.log("nombre");

    return ( 
        <Fragment>

            <div className="col-md-2 m-3 profile-card-1">
            
                <div className="img"><img src={'img'}/></div>
                <Link to={``} // Paso el nombre del pokemon para la URL y offset y limit para volver a última página visitada
                    style={{textDecoration: 'none', color:'white'}}>
                    <button className="btn btn-propio">
                        <a className="view-more">
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        </a>
                    </button>
                </Link>
                <div className="popup"></div>
                <div className="mid-section">
                    <div className="name">
                        Nombre
                    </div>
                    
                    <div className="description">
                        <p>Descipción:</p>
                        <br/>
                    </div>
                    <div className="line"></div>
                    <div className="stats">
                    <div className="stat">81.3M
                        <div className="subtext">Favoritos</div>
                    </div>
                    <div className="stat">822k
                        <div className="subtext">Likes</div>
                    </div>
                    <div className="stat">
                        <button>Fav</button>
                    </div>
                    </div>
                
                </div>
        
            
            </div>
        

        </Fragment>


     );
}
 
export default Card;
