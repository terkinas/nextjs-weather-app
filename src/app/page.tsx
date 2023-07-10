import Image from 'next/image'
import getCurrentWeather from '@/lib/getCurrentWeather';
import ClientConsoleLog from '@/components/client-console-log';
import { FiUmbrella, FiChevronDown } from 'react-icons/fi';
import { RiCelsiusLine } from 'react-icons/ri';

const dataExample = [
  'feel',
  'humidity',
  'pressure',
  'temp',
  'temp_max',
  'temp_min',
]

export default function Home() {
  // const data = getCurrentWeather();
  // console.log(data);
  console.log(process.env.OPEN_WEATHER_API_KEY)
  return (
    <main className="flex flex-col items-center justify-between pt-12 z-0">
      {/* weather representation */}
      <div className='flex flex-col px-4 sticky top-0'>
          <Image src='/images/island-normal.png' width={400} height={400} alt='weather-image' />
          <div>
            <h4 className='font-semibold text-white text-7xl flex'>32<span className='text-5xl'>°</span></h4>
            <p className='text-sm text-slate-200'>Rainy</p>
          </div>
      </div>

      <div className='w-6 h-6 bg-white shadow-lg rounded-full translate-y-1/2 z-20 opacity-90'>
        <div className='w-12 h-12 bg-white shadow-lg rounded-full z-10 -translate-x-1/4 -translate-y-1/4 opacity-50'></div>
      </div>

      {/* weather table */}
      <div className="z-10 w-full flex flex-col items-center justify-center pt-8 bg-white">
        <div className="w-full text-slate-800 px-4">
          <h4 className='font-semibold text-lg'>Weather now</h4>
          <div className="grid grid-cols-2 gap-6 w-full py-4 pt-5">
            {dataExample.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <span className='block p-3 bg-slate-100 rounded-full text-slate-800 whitespace-nowrap'><FiUmbrella /></span>
                  <div className='h-full flex flex-col justify-evenly'>
                    <h4 className='block text-xs text-slate-400'>titledsadasdas</h4>
                    <p className='font-semibold flex text-slate-700'>16°</p>
                  </div>
                </div>
            ))}
          </div>
        </div>

        <hr className='w-full my-6' />

        <div className="w-full text-slate-800 pb-12 relative">

          <div className='flex justify-between px-4'>
            <h4 className='font-semibold text-lg'>Prediction</h4>
            <h5 className='text-base text-slate-400 flex items-center gap-1'>Weekly <FiChevronDown size={12} /></h5>
          </div>
          <div className="flex flex-col gap-3 w-full py-4 pt-5">
            {dataExample.map((item, index) => (
              <div key={index} className={`grid grid-cols-4 gap-8 py-4 px-4 items-center border border-slate-100 rounded ${index == 0 ? 'font-semibold bg-slate-50' : ''}`}>
                  <h4 className=''>Today</h4>
                  <h5 className='col-span-2 text-right'>16°</h5>
                  <p>Cloudy</p>
                </div>
            ))}
            </div>

            {/* fade out effect */}
              <div className='w-full h-full bg-gradient-to-t from-white to-transparent absolute bottom-0'></div>
          </div>
      </div>

    </main>
  )
}
