import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from 'react'

import Card from '../components/Card';

const ListadoCards = (props) => {

    const [heros, setHeros] = useState([]);
    const [trajoDatos, setTrajoDatos] = useState(false);
    const [category, setCategory] = useState();
    const [category_id, setCategory_id] = useState();
    // const {id} = useParams();

    useEffect(() => {
        
        let pedidoHeros = new Promise((resolve, reject)=>{

            setTimeout(()=> {
                const heros = props.heros
                resolve(heros) 
            },0)
            
            })
            .then((heros)=>{
                console.log("heros_listado:");
                console.log(heros);
                setHeros(heros);
                setTrajoDatos(true);
            })


        }, [])

    

    return ( 
        
        <Fragment>
                  <div className="container">
                    <div className="row">
                        {
                            props.heros.map((hero) =>

                                <Card hero={hero} size={'col-sm-6 col-md-6 col-lg-4 col-xl-3 p-3'}/>

                            )
                        }
                    </div>
                </div>
        </Fragment>


     );
}
 
export default ListadoCards;
