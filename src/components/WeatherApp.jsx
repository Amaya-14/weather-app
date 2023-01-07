import React, { useEffect, useState } from 'react'
import WeatherForm from './WeatherForm'
import WeatherInfo from './WeatherInfo'

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
      // console.log(response)
      setWeather(response)
    } catch (error) {
      console.log(error)
    }
  }

  const onChangeCity = (city) => {
    setWeather(null)
    loadInfo(city)
  }

  return (
    <main className='bg-sky-400 h-screen font-poppins'>
      <section className='w-[450px] mx-auto p-2'>
        <WeatherForm onChangeCity={onChangeCity} />
      </section>
      <WeatherInfo weather={weather} />
    </main>
  )
}
