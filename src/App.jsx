import React, { useState } from 'react';
import Weather from './Components/Weather';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_Key = import.meta.env.VITE_API_KEY



  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_Key}&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url)
        .then((Response) => {
          setData(Response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });

      setLocation("");
    }
  };

  return (
    
    <div className="w-full h-full flex flex-col items-center justify-center">
      <input
        type='text'
        className='py-3 px-6 text-lg rounded-full border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none bg-white shadow-md mb-4 mt-10'
        placeholder="Enter Location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDownCapture={searchLocation}
      />


      {data.weather ? (
        <Weather weatherData={data} />
      ) : (
        <div className="text-center text-gray-600">
          Enter a location to get weather information.
        </div>
      )}
    </div>
  );
}

export default App;
