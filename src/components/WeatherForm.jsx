import React, { useState } from 'react'

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState('')

  const onChange = (event) => {
    const value = event.target.value
    if (value !== '') setCity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onChangeCity(city)
  }

  return (
    <form
      onSubmit={handleSubmit}
      action=''>
      <input
        type='text'
        placeholder='Ingresa la ciudad a buscar'
        onChange={onChange}
        className='p-4 w-full rounded-sm'
      />
    </form>
  )
}
