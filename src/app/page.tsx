'use client';
import { useState } from 'react';
import Navbar from './header/navbar';
import Weather from './weather/weather';
import NotFoundWeather from './weather/not-found';
import WeatherInformation from './weather/weather-information';
import 'animate.css';
import Swal from 'sweetalert2';

export default function Home() {
  const [weather, setWeather] = useState<any>([]);
  const [city, setCity] = useState('');
  const getDataWeatherApi = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!city.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Input cannot be empty!',
      });
    } else {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/data/2.5/forecast?q=${city}&cnt=12&appid=${process.env.NEXT_PUBLIC_APIKEY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
      if (data.cod === '404') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'City not found',
        });
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
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCity(event?.target.value)
        }
        name={'city'}
      />
      <div className="sm:flex px-10 ">
        <WeatherInformation
          name={weather.city?.name}
          country={weather.city?.country}
          population={weather.city?.population}
          sunrise={weather.city?.sunrise}
          sunset={weather.city?.sunset}
        />
        {weather.length === 0 || weather.cod === '404' ? (
          <NotFoundWeather />
        ) : (
          <div className="text-zinc-200 bg-neutral-800 md:px-5 md:py-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center mx-auto w-max animate__animated animate__fadeIn">
            {weather.list?.map((weathers: any, index: number) => {
              return (
                <Weather
                  key={index}
                  weatherImage={getWeatherImage(weathers.weather[0].main)}
                  weatherDate={weathers.dt_txt}
                  weatherTemp={Math.round(weathers.main.temp)}
                  weatherConditions={weathers.weather[0].main}
                  windSpeed={weathers.wind.speed}
                  windDeg={weathers.wind.deg}
                  windGust={weathers.wind.gust}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
