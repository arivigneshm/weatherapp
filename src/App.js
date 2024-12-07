import './App.css';

import { useState } from 'react';

import axios from  'axios';

function App() {
const [data, setData] = useState({});
const [location, setLocation] = useState('');
  let api_key = 'f10c29c4a62dda65e500e19ac932ba63';

  
  let searchLocation = (ev) => {
      if(ev.key === 'Enter') {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;
        axios.get(url)
            .then( resp => {
                setData(resp.data);
            })
        setLocation('');
    }
  }

  return (
    <div className="App">
        <div className='search'>
            <input 
                type="text" 
                className='input' 
                value={location} 
                onChange={ (ev) => {setLocation(ev.target.value)}} 
                placeholder='Enter location' 
                onKeyDown={searchLocation} 
            />
        </div>
        {Object.keys(data).length ? 
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        <h1> {data.main.temp}° F</h1>
                    </div>
                    <div className="description">
                        <p className='text-cap'>{data.weather[0].description}</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="feels">
                        <p className="bold">{data.main.feels_like}° F</p>
                        <p>Feels like</p>
                    </div>
                    <div className="humidity">
                        <p className="bold">{data.main.humidity}</p>
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        <p className="bold">{data.wind.speed} MPH</p>
                        <p>Wind speed</p>
                    </div>
                </div>
            </div>
        : null }
    </div>
  );
}

export default App;
