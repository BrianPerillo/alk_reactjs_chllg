import {createContext, useEffect, useState} from 'react'
import {db} from '../firebase';

export const TeamContext = createContext([]);  //Creo un contexto y lo exporto

export const TeamProvider = ({children}) => {  //Creo proveedor que recive datos (children), y lo exporto

  const [docId, setDocId] = useState()
  const [heros, setHeros] = useState([])
  const [hero, setHero]  = useState() 
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const [teamLength, setTeamLength] = useState(0)

  const getTeam = async () => {
    setHeros([]);
    db.collection('heros').onSnapshot((querySnapshot) => {
    setHeros([]); // Vacío el array que tenía para llenarlo con el nuevo team, por si se realizaron modificaciones
     querySnapshot.forEach((doc) => {
       var hero = doc.data()
       hero.hero.doc_id = doc.id
      //  console.log("herooo" + hero.hero.doc_id);
       console.log(hero)
       setHeros((heros) => heros.concat(hero))
       
       
     });
     setLoading(false)

    });

} 

const getTeamSize = async () => {
  const res = await db.collection('heros').get().then(snap => {
    const size = snap.size;
    setTeamLength(size)
  })
  
  return teamLength

};

const add_hero = async (hero) => {
  setHeros([])
  const heros = db.collection("heros");

  const newHero = {
      hero
  }

  heros.add(newHero).then(() => {
      console.log('success'); //SUCCESS
  }).catch(err => {
      setError(err); //ERROR
  }).finally(() => {
      setLoading(false);
  })

}

const deleteHero = async (doc_id) => {
   
    await db.collection('heros').doc(doc_id).delete()
    .then(setHeros([]))
    .then(setTeamLength(teamLength-1))

}


  return (

    <TeamContext.Provider value={{getTeam, getTeamSize, deleteHero, add_hero, heros, teamLength}}>
      {children}
    </TeamContext.Provider>



  )

}

