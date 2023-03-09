import './App.css';
import ClimateCard from "./components/ClimateCard";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from "./components/Loader";



function App () {
 
     //====== Cargando ======//
  const [isLoarding, setIsLoarding] = useState (false)
  const [climate, setClimate] = useState ({})
  
  
    //====== useEffect y axios======//  
    useEffect ( () => {
   
      navigator.geolocation.getCurrentPosition(position =>{
        console.log(position);
        const lat = position.coords.latitude
        const lon = position.coords.longitude
                     
       axios
        .get (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=49577ea5b1bee8b16faaf2d8f91f2583`)
        .then (resp =>{
          console.log(resp.data);
          setClimate (resp.data)
          setIsLoarding(false)
        })
        .catch ( error => console.error(error))
      });
    },[])


      const [search, setSearch] = useState ('')

      const searchCity = () => {

console.log(search)
      axios
      .get (`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=49577ea5b1bee8b16faaf2d8f91f2583`)
      .then (resp =>{

          setClimate (resp.data)
     
      })
      .catch ( error => console.error(error))
    
  }


   
 

  return (  
  <div className="App" >
   
   {isLoarding && <Loader/>}

   <input className="search-city" type="text" onChange={ e => setSearch(e.target.value) }/>
    <button onClick={ () => searchCity(search) } >Buscar</button>

   <ClimateCard
   data = {climate}/>
  
    







  
    
       
    </div>
  );
}

export default App;
