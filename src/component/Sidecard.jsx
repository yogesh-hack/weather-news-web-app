import React from 'react'
import moment from 'moment'

const Sidecard = ({ city, country, temp, sunrise, sunset, lat, log, feel, timezone, ground, sea }) => {
  return (
    <div className='w-full lg:ml-[10rem] ml:[5rem] p-3 text-white bg-white/10'>
      <div className='mx-20'>
        <iframe src="https://free.timeanddate.com/clock/i8prnrh8/n176/szw110/szh110/hoc09f/hbw0/hfc09f/cf100/hnce1ead6/fas30/fdi66/mqc000/mql15/mqw4/mqd98/mhc000/mhl15/mhw4/mhd98/mmc000/mml10/mmw1/mmd98/hhs2/hms2/hsv0" frameborder="0" width="110" height="110"></iframe>
      </div>
      <div className='flex justify-between space-2 p-2'>
        <div className='flex flex-col '>
          <h2 className='font-bold text-xl text-white'>{moment().format('dddd')}</h2>
          <h3 className='text-lg text-white'>{city},{country}</h3>
        </div>
        <div className='flex flex-col '>
          <h1 className='font-bold text-yellow-500 text-3xl'>{temp}<sup>o</sup>C</h1>
          <h1 className='text-center'>{"cloud"}</h1>
        </div>
      </div>
      <p className='bg-white/20 rounded-full text-center p-2 mb-2'>{moment().format("MMMM Do YYYY, h:mm A")}</p>
      <hr />
      <div className='p-5 mt-2 rounded-xl bg-white/10'>
        <div className='flex justify-between'>
          <h2 className='p-1 text-xl'>TimeZone</h2>
          <span className='p-1 text-xl'>{timezone}</span>
        </div>
        <div className='flex justify-between'>
          <h2 className='p-1 text-xl'>Feel Like</h2>
          <span className='p-1 text-xl'>{feel}<sup>o</sup>C</span>
        </div>
        <div className='flex justify-between'>
          <h2 className='p-1 text-xl'>Ground Level</h2>
          <span className='p-1 text-xl'>{ground}  hPa</span>
        </div>
        <div className='flex justify-between'>
          <h2 className='p-1 text-xl'>Sea Level</h2>
          <span className='p-1 text-xl'>{sea}  hPa</span>
        </div>
        <h2 className='p-2 text-center text-3xl font-bold'>Sunrise & Sunset</h2>
        <div className='flex justify-between p-3 items-center'>
          <div className='flex flex-col'>
            <h2 className='text-xl font-bold'>SunRise</h2>
            <h3 className='text-xl'>{sunrise} AM</h3>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-xl font-bold'>Sunset</h2>
            <h3 className='text-xl'>{sunset} PM</h3>
          </div>
        </div>
      </div>
      <div className='p-5'>
        <h2 className='p-2 text-center text-3xl font-bold'>Cordinates</h2>
        <div className='flex justify-between p-3 items-center'>
          <div className='flex flex-col'>
            <h2 className='text-xl font-bold'>Latitude</h2>
            <h3 className='text-xl'>{lat}</h3>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-xl font-bold'>longitude</h2>
            <h3 className='text-xl'>{log}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidecard