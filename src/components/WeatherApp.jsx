import React, { useEffect, useState } from 'react'
import WeatherForm from './WeatherForm'
import WeatherInfo from './WeatherInfo'
import Loading from './Loading'

export default function WeatherApp() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    loadInfo('Tegucigalpa')
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])

  const loadInfo = async (city = 'London') => {
    try {
      const URL = `${import.meta.env.VITE_URL}&key=${import.meta.env.VITE_KEY}&q=${city}`
      const request = await fetch(URL)
      const response = await request.json()
      if (!response.error) setWeather(response)
      else alert('Location not found')
    } catch (error) {}
  }

  const onChangeCity = (city) => {
    // setWeather(null)
    loadInfo(city)
  }

  return (
    <main className='bg-sky-400 h-screen font-poppins'>
      <section className='w-[450px] mx-auto p-2'>
        <WeatherForm onChangeCity={onChangeCity} />
      </section>
      {weather ? <WeatherInfo weather={weather} /> : <Loading />}
    </main>
  )
}
