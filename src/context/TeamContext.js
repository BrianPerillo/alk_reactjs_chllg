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
  const [goodAlignment, setGoodAlignment] = useState()
  const [pesoYAlturaPromedio, setPesoYAlturaPromedio] = useState({})
  
  /*Trear el Team*/ 
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

/*Calcular tamaño del team*/ 
  const getTeamSize = async () => {
    const res = await db.collection('heros').get().then(snap => {
      const size = snap.size;
      setTeamLength(size)
    })
    
    return teamLength

  };

  /*Traer stats*/ 
  const getStats = async () => {

    var combat = 0;
    var intelligence = 0;
    var durability = 0;
    var strength = 0;
    var power = 0;
    var speed = 0;
    var intelligence = 0;
    var weight = 0;
    var height = 0;
    var stats = {}

    db.collection('heros').onSnapshot((querySnapshot) => {

        querySnapshot.forEach((doc) => {

          combat = combat + parseInt(doc.data().hero.powerstats.combat) 
          intelligence = intelligence + parseInt(doc.data().hero.powerstats.intelligence) 
          durability = durability + parseInt(doc.data().hero.powerstats.durability) 
          strength = strength + parseInt(doc.data().hero.powerstats.strength) 
          power = power + parseInt(doc.data().hero.powerstats.power) 
          speed = speed + parseInt(doc.data().hero.powerstats.speed)

          //HEIGHT Y WEIGHT: Dado que weight y lenght son strings, creo variables para calcular el la cantidad de posiciones del string y luego recortar y parsear a integer
            var weight_length =  doc.data().hero.appearance.weight[1].length - 1
            var height_length = doc.data().hero.appearance.height[1].length - 1
            weight = weight + parseInt(doc.data().hero.appearance.weight[1].substr(0,weight_length-2)) //Suma de todos los pesos
            height = height + parseInt(doc.data().hero.appearance.height[1].substr(0,height_length-2)) //Suma de todos los pesos

        });

        //Guardo y Seteo Stats

        stats = {combat:combat, intelligence:intelligence, durability:durability, strength:strength, power:power, speed:speed, weight:weight, height:height}
        console.log(stats)

        setStats({...stats, stats});
        console.log(stats.length);

        //Creo variable maxState, recorro el objeto stats, y guardo el state más alto
        var maxState = {stat:'',power:0}
          
        for (var key in stats) {

          if(stats[key] > maxState.power){ //Si, el stat es más alto que mexState.power, reemplazo valores de maxState

            maxState.stat = key
            maxState.power = stats[key]

          }

        }

        setMaxStat(maxState);

        return stats

      });

  }

/* Cargar Hero en la db */
  const add_hero_to_db = async (hero) => {

    const heros = db.collection("heros");

    const newHero = {
        hero
    }

    heros.add(newHero).then(() => {
        console.log('success'); //SUCCESS
    }).catch(err => {
        setError(err); //ERROR
    })
    // .finally(() => {
    //    setLoading(false);
    // })

  }

/* Validaciones antes de cargar al hero en la DB */
  const add_hero = async (hero) => {

      //Vacío message,
      setMessage('');

      //Busco cuantos heros de alignment good y bad hay dentro del team.
      var goodAlignmentCount = 0
      var badAlignmentCount = 0

      heros.map((res) => {

        if(res.hero.biography.alignment == 'good'){
          goodAlignmentCount = goodAlignmentCount + 1
        }
        else{
          badAlignmentCount = badAlignmentCount + 1
        }

    })
      
      console.log(goodAlignmentCount + " " + badAlignmentCount);
      
    
    //Agrego un nuevo Hero, solo en caso de que el team tenga menos de 6 personajes y también valido alignment

      if(teamLength < 6){ //Compruebo si hay menos de 6 en el team

        if(hero.biography.alignment == 'good' && goodAlignmentCount<3){
          add_hero_to_db(hero);
          setMessage(hero.name + ' se agregó a tu equipo')
        }
        else if(hero.biography.alignment == 'good' && goodAlignmentCount==3) {
          setMessage('Tu equipo ya contiene la cantidad máxima de integrantes buenos')
        }
        else if(hero.biography.alignment == 'bad' && badAlignmentCount<3) {
          add_hero_to_db(hero);
          setMessage(hero.name + ' se agregó a tu equipo')
        }
        else if(hero.biography.alignment == 'bad' && badAlignmentCount==3) {
          setMessage('Tu equipo ya contiene la cantidad máxima de integrantes malos')
        }
        else if(hero.biography.alignment == 'neutral') {
          setMessage('Este Hero es Neutral - Para agregar un Hero a tu team, éste debe estar calificado como bueno o malo')
        }

    }
    else{
      setMessage('Tu equipo ya contiene la cantidad máxima de integrantes permitida')
    }

  }

/*Eliminar Hero del Team*/ 

  const deleteHero = async (doc_id) => {

      setMessage('')

      setDeleteHeroBool(prevDeleteHeroBool => !prevDeleteHeroBool)

      await db.collection('heros').doc(doc_id).delete()
      .then(setHeros([]))
      .then(setTeamLength(teamLength-1))

      // setMessage('Hero eliminado')
  }


  return (

    <TeamContext.Provider value={{getTeam, getTeamSize, getStats, deleteHero, add_hero, setMessage, deleteHeroBool, stats, maxStat, loading, heros, teamLength, message}}>
      {children}
    </TeamContext.Provider>



  )

}

