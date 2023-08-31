interface PropsWeatherInformation {
  name: string;
  country: string;
  population: string;
  sunrise: string;
  sunset: string;
}
export default function WeatherInformation({
  name,
  country,
  population,
  sunrise,
  sunset,
}: PropsWeatherInformation) {
  return (
    <div className="text-zinc-200 mt-7 bg-neutral-800 px-5 sm:mr-5 h-max font-mono rounded-lg pt-1 pb-1 mb-10 ">
      <p className="text-lg mt-4 mb-3 truncate">Todays Highlights</p>
      <h1 className="mb-1">{name}</h1>
      <h2 className="mb-1">{country}</h2>
      <p className="mb-1">Population {population}</p>
      <p className="mb-1">Sunrise {sunrise}</p>
      <p className="mb-5">Sunset {sunset}</p>
    </div>
  );
}
