import { useState } from "react"

    const ClimateCard = ({data}) => {
   

      const [isKevin, setIsKevin] = useState (true)

      console.log(data)
      
      let imgSrc = "./assets/iconos/"+ data.weather?.[0].icon+".svg"

      return (
      <div className="content-information">

        <div className="card-information">
        <h3><span>Clouds : </span>{data.weather?.[0].description}</h3>
        <img src={imgSrc} alt="" />             
        <h1><span>Temp : </span>{Math.trunc (isKevin ? data.main?.temp - 273.15 : (data.main?.temp - 273.15)*1.8 + 32)} {isKevin ? "C°" : "F°"}</h1>
        <p><span>Country : </span>{data.sys?.country}</p>
        <p><span>City : </span>{data.name}</p>
        <p><span>Humidity : </span>{data.main?.humidity}</p>
        </div>
        
        <div className="card-button"><button onClick = { () => setIsKevin (!isKevin)}>Change  F°</button></div>
        
      </div>
    )
  
}

export default ClimateCard

