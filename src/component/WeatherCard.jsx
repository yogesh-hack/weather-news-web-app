import React from 'react'

const WeatherCard = ({city,temp,desc,icon,pressure,visiblity,humadity}) => {

  return (

    <div className="rounded-xl shadow bg-center bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-vector/desert-forest-landscape-daytime-scene_1308-58176.jpg?w=996&t=st=1675761037~exp=1675761637~hmac=a7eb9795be102521b2395a3330146003defb33dbb49722e9f909f6d3714f105f')]">
      <div className="rounded-t-lg p-6">
        <img class="w-10 h-10 rounded-full bg-black p-1" src="https://cdn-icons-png.flaticon.com/512/615/615469.png?w=740&t=st=1675763151~exp=1675763751~hmac=d32b673471fe2b3f72b2ad71ed6982cc9f292d4db4a8ff2bcfda3a8e659ea73a" alt="Rounded avatar" />
        <div className="">
          <h2 className="text-2xl font-bold">Weather</h2>
          <h2 className="text-xl">What's the weather </h2>
        </div>
        <div className="py-6 ">
          <img alt={'weather'} className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/684/684908.png"/>
          <span className='font-bold'>{city}</span>
          <h1 className="text-7xl font-bold">{temp}<sup>o</sup>C</h1>
            <span className="text-xl p-1 rounded-xl backdrop-blur-xl bg-white/60">{desc}</span>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="rounded-xl p-3 backdrop-blur-sm bg-white/30">
            <h2 className="text-lg font-bold">Pressure</h2>
            <p className="text-xl font-bold">{pressure} hPa</p>
          </div>
          <div className="rounded-xl p-3 backdrop-blur-sm bg-white/30">
            <h2 className="text-lg font-bold">Visiblity</h2>
            <p className="text-xl font-bold">{visiblity} KM</p>
          </div>
          <div className="rounded-xl p-3 backdrop-blur-sm bg-white/30">
            <h2 className="text-lg font-bold">Humidity</h2>
            <p className="text-xl font-bold">{humadity} %</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard