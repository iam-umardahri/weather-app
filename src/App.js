import React, { useState } from "react";
import axios from "axios"

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=aa39ce4cf3dc22e6f6be64605924a957`
 
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
    axios.get(url).then((response) =>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}


  return(
    <div className="app">
      <div className="search">
      <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} °C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p>: null}
          </div>
        </div>
        <div className="bottom">
          <div className="real-feel">
        {data.main ? <p className="heavy-text">{data.main.feels_like} °C</p> : null}
        <p>RealFeel</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="heavy-text">{data.main.humidity}%</p>:null} 
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="heavy-text">{data.wind.speed} km/h</p> :null} 
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
