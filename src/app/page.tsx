'use client';
import { useState } from 'react';
import Navbar from './header/navbar';
import Image from 'next/image';
import cloudImage from './image/cloud.png';

export default function Home() {
  const [weather, setWeather] = useState<any>([]);
  const [city, setCity] = useState('');
  const getDataWeatherApi = async (event: any) => {
    event.preventDefault();
    if (!city.trim()) {
      alert('Cannot empty string');
    } else {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=12&appid=3f7b747f2bf04b4d87809960200da847&units=metric`
      );
      const data = await res.json();
      setWeather(data);
      if (data.cod === '404') {
        alert('City Not Found');
      }
    }
  };

  const getWeatherImage = (weatherCondition: string) => {
    switch (weatherCondition.toLowerCase()) {
      case 'clouds':
        return 'https://cdn-icons-png.flaticon.com/512/252/252035.png';
      case 'clear':
        return 'https://cdn-icons-png.flaticon.com/512/3731/3731894.png';
      case 'rain':
        return 'https://cdn-icons-png.flaticon.com/512/4150/4150904.png';
      default:
        return 'https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png';
    }
  };

  return (
    <div>
      <Navbar
        src={`https://icon-library.com/images/white-cloud-icon-png/white-cloud-icon-png-29.jpg`}
        onSubmit={getDataWeatherApi}
        value={city}
        onChange={(event: any) => setCity(event?.target.value)}
      />
      <div className="flex px-10">
        <div className="text-zinc-200 mt-7 bg-neutral-800 px-5 mr-5 h-max font-mono rounded-lg">
          <p className="text-lg mt-4 mb-3 truncate">Todays Highlights</p>
          <h1 className="mb-1">{weather.city?.name}</h1>
          <h2 className="mb-1">{weather.city?.country}</h2>
          <p className="mb-1">Population {weather.city?.population}</p>
          <p className="mb-1">Sunrise {weather.city?.sunrise}</p>
          <p className="mb-5">Sunset {weather.city?.sunset}</p>
        </div>
        {weather.length === 0 ? null : (
          <div className="text-zinc-200 bg-neutral-800 px-5 py-5 grid grid-cols-4 gap-5 justify-center items-center mx-auto ">
            {weather.list?.map((weathers: any, index: number) => {
              return (
                <div
                  key={index}
                  className="border-2 border-gray-500 px-10 py-2 rounded-lg"
                >
                  <Image
                    src={getWeatherImage(weathers.weather[0].main)}
                    alt="cloud-image"
                    width={50}
                    height={50}
                  />

                  <p className="mb-1 mt-2">{weathers.dt_txt}</p>
                  <p className="mb-1">{Math.round(weathers.main.temp)}°c</p>
                  <p>{weathers.weather[0].main}</p>

                  <p className="text-center mt-4">Air Quality Index</p>
                  <div className="flex justify-center items-center">
                    <Image
                      src={
                        'https://cdn1.iconfinder.com/data/icons/hawcons/32/700457-icon-43-wind-512.png'
                      }
                      alt="wind-image"
                      className="mr-3"
                      width={50}
                      height={50}
                    />
                    <div className="px-2">
                      <p>Speed</p>
                      <p>{weathers.wind.speed}</p>
                    </div>
                    <div className="px-2">
                      <p>Deg</p>
                      <p>{weathers.wind.deg}</p>
                    </div>
                    <div>
                      <p>Gust</p>
                      <p>{weathers.wind.gust}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
