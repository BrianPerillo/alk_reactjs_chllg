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
  const [message, setMessage] = useState('')
  const [stats, setStats] = useState({})
  const [maxStat, setMaxStat] = useState({})
  const [deleteHeroBool, setDeleteHeroBool] = useState(false)
  
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
    //  setLoading(false)

    });

} 

const getTeamSize = async () => {
  const res = await db.collection('heros').get().then(snap => {
    const size = snap.size;
    setTeamLength(size)
  })
  
  return teamLength

};


const getStats = async () => {

  var combat = 0;
  var intelligence = 0;
  var durability = 0;
  var strength = 0;
  var power = 0;
  var speed = 0;
  var intelligence = 0;
  var stats = {}

  db.collection('heros').onSnapshot((querySnapshot) => {

      querySnapshot.forEach((doc) => {

        combat = combat + parseInt(doc.data().hero.powerstats.combat) 
        intelligence = intelligence + parseInt(doc.data().hero.powerstats.intelligence) 
        durability = durability + parseInt(doc.data().hero.powerstats.durability) 
        strength = strength + parseInt(doc.data().hero.powerstats.strength) 
        power = power + parseInt(doc.data().hero.powerstats.power) 
        speed = speed + parseInt(doc.data().hero.powerstats.speed) 
        stats = {combat:combat, intelligence:intelligence, durability:durability, strength:strength, power:power, speed:speed}
      });

      setStats({...stats, stats});
      console.log(stats.length);

      // console.log("maxStat: " + maxState.stat);
      // console.log("maxStat: " + maxState.power);
      // console.log(maxStat);

      setLoading(false)

      //Creo variable maxState, recorro el objeto stats, y guardo el state más alto
      var maxState = {stat:'',power:0}
        
      for (var key in stats) {

        if(stats[key] > maxState.power){ //Si, el stat es más allto que mexState.power, reemplazo valores de maxState

          maxState.stat = key
          maxState.power = stats[key]

        }

      }

      setMaxStat(maxState);

      return stats

    });

}

const add_hero = async (hero) => {
  setHeros([])

  //Agrego un nuevo Hero, solo en caso de que el team tenga menos de 6 personajes
  if(teamLength < 6){

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

    setMessage(hero.name + ' se agregó a tu equipo')

  }
  else {

    setMessage('Tu equipo ya contiene la cantidad máxima de integrantes permitida')

  }

}

const deleteHero = async (doc_id) => {

    setMessage('')

    setDeleteHeroBool(prevDeleteHeroBool => !prevDeleteHeroBool)

    await db.collection('heros').doc(doc_id).delete()
    .then(setHeros([]))
    .then(setTeamLength(teamLength-1))

    setMessage('Hero eliminado')
}


  return (

    <TeamContext.Provider value={{getTeam, getTeamSize, getStats, deleteHero, add_hero, setMessage, deleteHeroBool, stats, maxStat, loading, heros, teamLength, message}}>
      {children}
    </TeamContext.Provider>



  )

}

