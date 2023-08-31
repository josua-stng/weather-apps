import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
export default function Navbar({ value, onChange, onSubmit, src, name }: any) {
  return (
    <div className="flex justify-between items-center px-5 py-5 top-0 sticky z-20 bg-zinc-900 mb-5">
      <div>
        <Image src={src} alt="weather-image" width={50} height={50} />
      </div>
      <div>
        <form onSubmit={onSubmit} className="relative">
          <input
            className="border-2 border-black px-5 text-white py-2.5 rounded-xl bg-zinc-800 placeholder:px-2 w-full ml-2 "
            type="text"
            placeholder="search city..."
            value={value}
            onChange={onChange}
            name={name}
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-white absolute  right-4 bottom-3.5" />
        </form>
      </div>
      <div className="bg-gray-300 px-4 py-2 rounded-xl ml-5">
        <p className="text-sm">Location</p>
      </div>
    </div>
  );
}
