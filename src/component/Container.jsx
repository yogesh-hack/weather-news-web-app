import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Sidecard from './Sidecard';
import WeatherCard from './WeatherCard';
import AirQulity from './AirQulity';

const Container = (props) => {
  // implement weather API from openweather

  const APIKey = "bc14daa24ff1034374375f7637f515df"
  
  const [isloading,setloading] = useState(true);
  const [data, setdata] = useState({})
  const [city, setCity] = useState("")

  const getWeatherdata = (City) => {
    if (!City) return
    const APIurl = "https://api.openweathermap.org/data/2.5/weather?q=" + City + "&appid=" + APIKey
    axios.get(APIurl).then((res) => {
      console.log("responce", res.data)
      setdata(res.data)
      setloading(false)
    }).catch((err) => {
      console.log(err)
    })
  }

  // hard code for check its working or not
  useEffect(() => {
    getWeatherdata("ghaziabad")
  }, [])

  const handleCity = (e) => {
    // console.log(e.target.value)
    setCity(e.target.value)
  }
  const handleSearch = () => {
    getWeatherdata(city)
  }

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = hour + ':' + min;
    return time;
  }

  function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["North", "North North East", "North East", "East North East", "East", "East South East", "South East", "South South East", "South", "South South West", "South West", "West South West", "West", "West North West", "North West", "North North West"];
    return arr[(val % 16)];
  }
  
  if(isloading){
    return (
      <div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        Loading...
      </div>
    )
  }
  
  return (
    <>
      <div className="container px-10 mt-10 w-[50rem]">
        <div className="flex p-2 gap-60">
          <div className="flex">
            <img class="w-10 h-10 rounded-full" src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg" alt="Rounded avatar" />
            <div className="px-5">
              <h2 className="text-white font-bold text-3xl">Hello,</h2>
              <h4 className="text-white font-bold text-xl">{props.name}</h4>
            </div>
          </div>
          <div className="flex-col justify-between gap-2">
            <input
              type="search"
              name="Search"
              placeholder="Search City ..."
              onChange={handleCity}
              value={city}
              className="w-full p-2 text-xl rounded-md focus:outline-none"
            />
            <span className="flex">
              <button type="submit" onClick={handleSearch} className="my-3 hover:bg-orange-400 bg-white font-bold p-2 rounded-md">Search</button>
            </span>
          </div>
        </div>
        <h2 className='p-2 text-5xl font-bold text-white'>What's the Weather Today ?</h2>
        <div className="w-max grid gap-10 py-10 grid-cols-1mb-6 lg:grid-cols-2">
           <WeatherCard city={data.name} temp={((((data.main.temp) -32)*5)/9).toFixed(2)} desc={data.weather[0].description} pressure={data.main.pressure} visiblity={data.visibility} humadity={data.main.humidity} />
           <AirQulity gust={data.wind.gust} deg={data.wind.deg} direction={degToCompass(data.wind.deg)} windSpeed={data.wind.speed} />
        </div>
      </div>
       <Sidecard city={data.name} country={data.sys.country} temp={((data.main.temp) - 273.15).toFixed(2)} sunrise={timeConverter(data.sys.sunrise)} sunset={timeConverter(data.sys.sunset)} lat={data.coord.lat} log={data.coord.lon} feel={((data.main.feels_like) - 273.15).toFixed(2)} ground={data.main.grnd_level} sea={data.main.sea_level} timezone={data.timezone} />
    </>
  )
}

export default Container
