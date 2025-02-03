import React,{useState} from 'react'
import { UilCloud } from '@iconscout/react-unicons'
import { UilWind } from '@iconscout/react-unicons'
import { UilSun } from '@iconscout/react-unicons'
import { UilCompressArrows } from '@iconscout/react-unicons'

const Weatherp = ({temp, feelike, humidity, pressure, clouds, windSpeed, weather, icon}) => {

  const weatherType=()=>{

    switch (icon) {

      case '01d':
        return       <img className=' h-20' src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather" />

        break;
      case '02d':
        return  <img className=' h-20' src="https://openweathermap.org/img/wn/02d@2x.png" alt="weather" />
        break;
      case '03d':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/03d@2x.png" alt="weather" />
        break;
      case '04d':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/04d@2x.png" alt="weather" />
        break;
      case '09d':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/09d@2x.png" alt="weather" />
        break;
      case '10d':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather" />
        break;
      case '11d':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/11d@2x.png" alt="weather" />
        break;
      case '13d':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/13d@2x.png" alt="weather" />
        break;
      case '50d':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather" />
        break;
      // night
      case '01n':
        return       <img className=' h-20' src="https://openweathermap.org/img/wn/01n@2x.png" alt="weather" />

        break;
      case '02n':
        return  <img className=' h-20' src="https://openweathermap.org/img/wn/02n@2x.png" alt="weather" />
        break;
      case '03n':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/03n@2x.png" alt="weather" />
        break;
      case '04n':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/04n@2x.png" alt="weather" />
        break;
      case '09n':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/09n@2x.png" alt="weather" />
        break;
      case '10n':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/10n@2x.png" alt="weather" />
        break;
      case '11n':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/11n@2x.png" alt="weather" />
        break;
      case '13n':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/13n@2x.png" alt="weather" />
        break;
      case '50n':
        return <img className=' h-20' src="https://openweathermap.org/img/wn/50n@2x.png" alt="weather" />
        break;

      default:
        return <p>☁️</p>
        break;
    }

    }
  console.log(icon)
  return (
    <div className='flex flex-row justify-between px-20 '>
  <div className=' flex flex-col w-[37.5vw] border-2 rounded-4xl bg-gradient-to-r from-blue-300 to-blue-700 p-1 '>
    <div className='flex justify-center items-center '>
    <p className=' text-8xl mb-2'>
      {
        weatherType()
      }
    </p>
    </div>
    <div className=' flex flex-row w-[37.5vw] justify-center items-center'>
      <div className=' flex justify-center items-center flex-col ml-6 '>
        <h1 className='font-extrabold text-xl'>Temp</h1>
        <h1 className=' font-semibold  '>{Number((temp-273.15).toFixed(1))} C</h1>
        </div>
      <div className=' flex justify-center items-center flex-col ml-6 '>
        <h1 className='font-extrabold text-xl'>feelike</h1>  
        <h1 className=' font-semibold  '>{Number((feelike-273.15).toFixed(1))} C</h1>
        </div>
      <div className=' flex justify-center items-center flex-col ml-6 '>
        <h1 className='font-extrabold text-xl'>humidity</h1>
        <h1 className=' font-semibold  '>{humidity}%</h1>
        </div>
    </div>
  </div>
  
  <div className='bg-transparent flex flex-row w-[37.5vw] flex-wrap rounded-4xl justify-center items-center border-2 bg-gradient-to-r from-blue-300 to-blue-700 p-1  '>
  <div className=' flex justify-center items-center flex-col ml-6 '>
        <h1 className='font-extrabold text-xl'>pressure</h1>
        <h1 className=' font-semibold flex flex-row '><UilCompressArrows/> {pressure} hpa</h1>
        </div>
      <div className=' flex justify-center items-center flex-col ml-6 '>
        <h1 className='font-extrabold text-xl'>clouds</h1>  
        <h1 className=' font-semibold flex flex-row '><UilCloud/> {clouds}%</h1>
        </div>
      <div className=' flex justify-center items-center flex-col ml-6 '>
        <h1 className='font-extrabold text-xl'>wind</h1>
        <h1 className=' font-semibold flex flex-row '><UilWind/> {windSpeed} m/s</h1>
        </div>
        <div className=' flex justify-center items-center flex-col ml-6 '>
        <h1 className='font-extrabold text-xl'>Weather</h1>
        <h1 className=' font-semibold  '>{weather}</h1>
        </div>
      <div className=' flex justify-center items-center flex-col ml-6 '>
        </div>
  </div>
   </div>
  )
}

export default Weatherp

