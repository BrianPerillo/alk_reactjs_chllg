import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment} from 'react'

import ListadoCards from '../components/ListadoCards'

const Home = (props) => {


    return ( 
        
        <Fragment>

            <div className="row d-flex justify-content-center m-auto">

                <ListadoCards/>

            </div>
            
        </Fragment>


     );
}
 
export default Home;
