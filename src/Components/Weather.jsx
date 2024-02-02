import React from 'react';

const Weather = ({ weatherData }) => {
  console.log(weatherData);

  if (!weatherData.weather) {
    return null;
  }

  const {
    name,
    sys: { country },
    weather,
    main: { temp, feels_like, humidity, pressure },
    wind: { speed },
  } = weatherData;

  const dynamicIconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className='w-500 h-250 bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-10'>
      <div className='flex justify-between w-full'>
        <div className='w-1/2 my-4 mx-auto flex justify-between items-center'>
          <div className='flex flex-col items-start justify-between h-full'>
            <div>
              <p className='text-xl'>{`${name}, ${country}`}</p>
              <p className='text-sm'>{weather[0].description}</p>
            </div>
            <div>
              <h1 className='text-6xl font-semibold'>{`${temp.toFixed()} °C`}</h1>
            </div>
            <div className="w-1/2 flex flex-col justify-between items-end">
              <div className="relative">
                <img src={dynamicIconUrl} alt="" className="w-[120px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
            <div className="flex justify-between gap-x-8">
              <p> Feels Like </p>
              <p className="font-bold w-20">{feels_like.toFixed()} °C</p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p> Humidity </p>
              <p className="font-bold w-20">{humidity} %</p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p> Wind Speed </p>
              <p className="font-bold w-20">{speed.toFixed()} KPH</p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p> Pressure </p>
              <p className="font-bold w-20">{pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
