import Image from 'next/image';
interface PropsWeather {
  weatherImage: string;
  weatherDate: string;
  weatherTemp: number;
  weatherConditions: string;
  windSpeed: string;
  windDeg: string;
  windGust: string;
}

export default function Weather({
  weatherImage,
  weatherDate,
  weatherTemp,
  weatherConditions,
  windSpeed,
  windDeg,
  windGust,
}: PropsWeather) {
  return (
    <div className="border-2 border-gray-500 px-10 py-2 rounded-lg font-serif">
      <Image src={weatherImage} alt="cloud-image" width={50} height={50} />
      <p className="mb-1 mt-2">{weatherDate}</p>
      <p className="mb-1">{Math.round(weatherTemp)}°c</p>
      <p>{weatherConditions}</p>
      <p className="text-center mt-4 text-zinc-400 mb-1.5">Air Quality Index</p>
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
          <p className="pl-2">{windSpeed}</p>
        </div>
        <div className="px-2">
          <p>Deg</p>
          <p>{windDeg}</p>
        </div>
        <div>
          <p>Gust</p>
          <p>{windGust}</p>
        </div>
      </div>
    </div>
  );
}
