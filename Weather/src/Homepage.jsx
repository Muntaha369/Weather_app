import React,{useState,useEffect} from 'react'
import axios from 'axios'
import tzLookup from 'tz-lookup';
import Header from './Components/Header'
import TimezoneClock from './Components/Timezone'
import Weatherp from './Components/Weatherp';
import Forecast from './Components/Forecast';


const Homepage = () => {
  const [data, setData] = useState(null)
  const [timezone, setTimezone] = useState('')
  const [city, setCity] = useState('')
  const [cityupdate, setCityupdate] = useState('washington')
  const [forecastData, setForecastData] = useState(null)



  const getData=async()=>{
      const Api = `https://api.openweathermap.org/data/2.5/weather?q=${cityupdate}&appid=cf3eac9f3e31f113093c61605d6c7602`;
  const Apinew=`https://api.openweathermap.org/data/2.5/forecast?q=${cityupdate}&appid=cf3eac9f3e31f113093c61605d6c7602`
    try {
      const res= await axios.get(Api)
      const resnew= await axios.get(Apinew)
      setData(res.data)
      setCity(res.data.name)
      setForecastData(resnew.data)
      console.log(res.data)
      console.log(resnew.data)

      const Lat=res.data.coord.lat
      const Lon=res.data.coord.lon

      const tempTimezone=tzLookup(Lat,Lon)
      console.log(tempTimezone)
      setTimezone(tempTimezone)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCityChange=(value)=>{
    setCityupdate(value)
  }
  useEffect(() => {
    getData();
  }, [cityupdate])
  return (
    <>
    <div className='bg-gradient-to-b from-blue-500 to-orange-500'>
      <Header data={data} newcity={handleCityChange}/>
      {timezone&&<TimezoneClock timeZone={`${timezone}`} city={city} />}

      {data&&(<Weatherp
       temp={data.main.temp}
       feelike={data.main.feels_like}
       humidity={data.main.humidity} 
       pressure={data.main.pressure} 
       clouds={data.clouds.all} 
       windSpeed={data.wind.speed} 
       weather={data.weather[0].main} 
       icon={data.weather[0].icon}
       >
       </Weatherp>)}
       
        {forecastData&&<Forecast data={forecastData}/>}
        
    </div>
    </>
  )
}

export default Homepage