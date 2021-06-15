import {Link, NavLink} from 'react-router-dom';
import React, {Fragment, useContext} from 'react';

const NavBar = (props) => {

    return ( 

        <Fragment>

            <header>
                <div className="container">

                    <nav className="row">

                        <div className="col-md-4">
                            <h1 hidden></h1>
                        
                            <div> {/*Sección Logo*/}
                                <a href="">
                                    <Link to={'/'}><img style={{width:"85px"}} src=""/></Link>
                                </a>
                                <span></span>
                            </div>
                        </div>

                        <div id="categorias" className="col-md-6">

                            <ul className="menu menu m-0">
                            <NavLink to={`/`}><li className=""> Team
                                    <ul className="pb-2">
                                    </ul>
                                </li></NavLink>
                            </ul>

                            <ul className="menu menu m-0">
                            <NavLink to={`/search`}><li className=""> Buscar Heros
                                    <ul className="pb-2">
                                    </ul>
                                </li></NavLink>
                            </ul>
                        
                        </div>


                    </nav>
                </div>
                
            </header>

        </Fragment>

     );

}
 
export default NavBar;