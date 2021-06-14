import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from 'react'
import {db} from '../firebase';
import Card from './Card'

import ListadoCards from '../components/ListadoCards'

const Team = (props) => {

    const [docId, setDocId] = useState()


    const deleteHero = async (doc_id) => {
        await db.collection('heros').doc(doc_id).delete()
        .then(console.log('Deleteddd'));
    }

    useEffect(() => {


        
    }, [])

    return ( 
        <Fragment>

            <div className="container">
                <div className="row">   
                    {
                        props.heros.map((hero) =>

                         <Card hero={hero.hero} teamView={true} deleteHero={deleteHero} />

                            // <div>
                            //     <p>{hero.hero.name}</p> 
                            //     <form onSubmit={handleOnSubmit}>
                                    
                            //         <button type='submit' name="delete" value={hero.hero.doc_id}>Eliminar del equipo</button>
                            //      </form>
                            // </div>
                        )
                    
                    }
                </div> 
            </div>   

        </Fragment>


     );
}
 
export default Team;
