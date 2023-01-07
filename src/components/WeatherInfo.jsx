import React from 'react'

export default function WeatherInfo({ weather }) {
  return (
    <div className='container w-fit mx-auto p-4 rounded-sm bg-white'>
      <div className='flex justify-between'>
        <div className='w-fit'>
          <h2 className='text-2xl font-bold'>{weather?.location.name}</h2>
          <p className='text-md text-center'>{weather?.location.country}</p>
        </div>
        <div className='flex gap-3'>
          <img
            className=''
            src={`https:${weather?.current.condition.icon}`}
            alt={`${weather?.current.condition.text}`}
          />
          <div>
            <p>{weather?.current.condition.text}</p>
            <p>{weather?.current.temp_c}°</p>
          </div>
        </div>
      </div>
      <iframe
        title='mapa'
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d61922.20379819165!2d${weather?.location.lon}!3d${weather?.location.lat}6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2shn!4v1673048922772!5m2!1ses!2shn`}
        width='400'
        height='450'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </div>
  )
}
