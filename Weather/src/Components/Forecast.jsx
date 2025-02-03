import React from 'react';

const Forecast = ({ data }) => {
  console.log(data.list);

  const weatherType = (icon) => {
    switch (icon) {
      case '01d':
        return <img className='h-20' src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather" />;
      case '02d':
        return <img className='h-20' src="https://openweathermap.org/img/wn/02d@2x.png" alt="weather" />;
      case '03d':
        return <img className='h-20' src="https://openweathermap.org/img/wn/03d@2x.png" alt="weather" />;
      case '04d':
        return <img className='h-20' src="https://openweathermap.org/img/wn/04d@2x.png" alt="weather" />;
      case '09d':
        return <img className='h-20' src="https://openweathermap.org/img/wn/09d@2x.png" alt="weather" />;
      case '10d':
        return <img className='h-20' src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather" />;
      case '11d':
        return <img className='h-20' src="https://openweathermap.org/img/wn/11d@2x.png" alt="weather" />;
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
        return null;
    }
  };

  return (
    <div className='overflow-x-hidden'>
    <div  className=' flex flex-row mt-10 overflow-x-scroll w-screen scrollbar-hide'>
      {data.list.splice(0,7).map((item, idx) => (
        <div className=' flex-shrink-0 w-[20em] p-2' key={idx}>
         <div id='hhh' className=' h-40 flex flex-col items-center justify-center rounded-4xl border-4'> 
          <p>Date : {item.dt_txt}</p>
          <p> Temp : {item.main.temp}</p>
          {weatherType(item.weather[0].icon)}
         </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Forecast;