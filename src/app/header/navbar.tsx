import Image from "next/image";

export default function Navbar({ value, onChange, onSubmit ,src}: any) {
  return (
    <div className="flex justify-between items-center px-5 py-5">
      <div>
       <Image
       src={src}
       alt="weather-image"
       width={50}
       height={50}
    
       />
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            className="border-2 border-black px-5 text-white py-2.5 rounded-xl bg-zinc-800 placeholder:px-2"
            type="text"
            placeholder="search city..."
            value={value}
            onChange={onChange}
          />
        </form>
      </div>
      <div className="bg-gray-300 px-4 py-2 rounded-xl">
        <p className="text-sm">Current Location</p>
      </div>
    </div>
  );
}
