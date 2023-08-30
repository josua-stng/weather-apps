const dummyWeatherNotFound = new Array(12).fill(null);
export default function NotFoundWeather() {
  return (
    <div className="text-zinc-200 bg-neutral-800 md:px-5 md:py-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center mx-auto w-max">
      {dummyWeatherNotFound.map((_, index) => {
        return (
          <div key={index}>
            <div className="border-2 border-gray-500 px-10 py-2 rounded-lg">
              <p>???</p>
              <p className="mb-1 mt-2">???</p>
              <p className="mb-1">???°c</p>
              <p>???</p>
              <p className="text-center mt-4">Air Quality Index</p>
              <div className="flex justify-center items-center">
                <p>???</p>
                <div className="px-4">
                  <p>Speed</p>
                  <p className="px-2">???</p>
                </div>
                <div className="px-2">
                  <p>Deg</p>
                  <p>???</p>
                </div>
                <div>
                  <p>Gust</p>
                  <p>???</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
