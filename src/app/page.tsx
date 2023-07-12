

import Image from 'next/image'
import getCurrentWeather from '@/lib/getCurrentWeather';
import ClientConsoleLog from '@/components/client-console-log';
import { FiUmbrella, FiChevronDown, FiWind, FiSun, FiDroplet, FiCloudSnow, FiCloud, FiCloudLightning, FiCloudRain } from 'react-icons/fi';
import { RiCelsiusFill, RiFoggyLine } from 'react-icons/ri';
import { isNumber } from '@/lib/utils';

const dataExample = [
  'feel',
  'humidity',
  'pressure',
  'temp',
  'temp_max',
  'temp_min',
]

const weatherNow = [
  'Feel like',
  'Wind',
  'Precipitation',
  'Humidity',
  'Chance of rain',
  'UV Index',
]

const weatherNowData = [
  'feels_like',
  'wind_speed',
  'dew_point',
  'humidity',
  'clouds',
  'uvi'
]

const weatherNowSymbols = [
  '°',
  ' km/h',
  '%',
  '%',
  '%',
  '/10'
]

const weatherNowIcons: any = [
  {key: 1, icon: <RiCelsiusFill />},
  {key: 2, icon: <FiWind />},
  {key: 3, icon: <FiUmbrella />},
  {key: 4, icon: <FiDroplet />},
  {key: 5, icon: <FiCloudRain />},
  {key: 6, icon: <FiSun />},
]

const WeatherIcons: any = {
  Thunderstorm: <FiCloudLightning />,
  Drizzle: <RiFoggyLine />,
  Rain: <FiCloudRain />,
  Snow: <FiCloudSnow />,
  Clear: <FiSun />,
  Clouds: <FiCloud />,
}

const weekDay = new Date();
const weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekDayName = weekDayNames[weekDay.getDay()];

export default async function Home() {
  const weatherData = await getCurrentWeather();

  // console.log(data);
  // console.log(process.env.OPEN_WEATHER_API_KEY)
  return (
    <main className="flex flex-col items-center justify-between pt-12 z-0
    md:grid md:grid-cols-3 max-w-7xl mx-auto">

      {/*  */}
      { weatherData && <ClientConsoleLog weatherData={weatherData} /> }
      {/* weather representation */}
      <div className='flex flex-col px-4 sticky top-0 z-10'>
          <div className='absolute text-9xl text-white'> {WeatherIcons[`${weatherData.props.data.daily[0].weather[0].main}`]} </div>
          <Image className='animate-[floating_3s_ease-in-out_infinite]' src='/images/island-normal.png' width={400} height={400} alt='weather-image' />
          <div>
            <h4 className='font-semibold text-white text-7xl flex md:text-9xl'>{Math.round(weatherData.props.data.current.temp)}<span className='text-5xl'>°</span></h4>
            <p className='text-sm text-slate-200 md:text-base'>{weatherData.props.data.daily[0].weather[0].main}</p>
          </div>
      </div>

      <div className='w-6 h-6 bg-white shadow-lg rounded-full translate-y-1/2 z-20 opacity-90
      md:hidden'>
        <div className='w-12 h-12 bg-white shadow-lg rounded-full z-10 -translate-x-1/4 -translate-y-1/4 opacity-50'></div>
      </div>

      {/* weather table */}
      <div className="z-30 w-full flex flex-col items-center justify-center pt-8 bg-white md:bg-transparent 
      md:px-6 md:rounded-lg md:flex-row md:col-span-2 md:items-start md:gap-3 ">
        <div className="w-full text-slate-800 px-4 md:bg-white md:p-4 md:rounded-lg md:shadow-lg">
          <h4 className='font-semibold text-lg px-2'>Weather now</h4>
          <div className="grid grid-cols-2 gap-6 w-full py-4 pt-5">
            {dataExample.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <span className='block p-3 bg-slate-100 rounded-full text-slate-800 whitespace-nowrap'>{weatherNowIcons[index].icon}</span>
                  <div className='h-full flex flex-col justify-evenly'>
                    <h4 className='block text-xs text-slate-400'>{weatherNow[index]}</h4>
                    <p className='font-semibold flex text-slate-700'>{ isNumber(weatherData.props.data.current[weatherNowData[index]]) ? Math.round(weatherData.props.data.current[weatherNowData[index]]) : weatherData.props.data.current[weatherNowData[index]]}{weatherNowSymbols[index]}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>

        <hr className='w-full my-6 md:hidden' />

        <div className="w-full text-slate-800 pb-12 relative md:bg-white px-4 md:p-4 md:rounded-lg md:shadow-lg">

          <div className='flex justify-between px-2'>
            <h4 className='font-semibold text-lg'>Prediction</h4>
            <h5 className='text-base text-slate-400 flex items-center gap-1'>Weekly <FiChevronDown size={12} /></h5>
          </div>
          <div className="flex flex-col gap-3 w-full py-4 pt-5">
            {dataExample.map((item, index) => (
              <div key={index} className={`grid grid-cols-4 gap-8 py-4 px-4 items-center border border-slate-100 rounded ${index == 0 ? 'font-semibold bg-slate-50' : ''}`}>
                  <h4 className=''>{ weekDay.getDay() + index < 6 ? 
                  (index == 0 ? 'Today' : (index == 1 ? 'Tomorrow' : (weekDayNames[weekDay.getDay() + 2]) )) : (weekDayNames[weekDay.getDay() + index - 6])}</h4>
                  <h5 className='col-span-2 text-right'>{Math.round(weatherData.props.data.daily[index].temp.day)}<sup>°</sup></h5>
                  <p className='flex flex-col items-center text-sm'>{WeatherIcons[`${weatherData.props.data.daily[index].weather[0].main}`]} {weatherData.props.data.daily[index].weather[0].main}</p>
                </div>
          ))}
            </div>

            {/* fade out effect */}
              <div className='w-full h-full bg-gradient-to-t from-white to-transparent absolute bottom-0 hidden'></div>
          </div>
      </div>

      <Image src={'/images/earth-illustration.png'}  width={400} height={400} alt="earth illustration" className='w-screen h-screen object-contain top-0 left-0 -z-10 opacity-10 fixed scale-125' />

    </main>
  )
}
