import React, { useState } from 'react'

export default function Q2() {
  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(32)

  const fahrenheitChange = (e) => {
    setFahrenheit(e.target.value)
    setCelsius((5 / 9) * (e.target.value - 32))
  }
  const celciusChange = (e) => {
    setCelsius(e.target.value)
    setFahrenheit(e.target.value * (9 / 5) + 32)
  }
  return (
    <div>
      <h6>Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. [Formula : c/5 = (f-32)/9]</h6>
      <div className='input-group mt-4'>
        <input type="number" value={celsius} onChange={celciusChange} className="form-control" aria-describedby='celsius'/>
        <span className="input-group-text" id="celsius">Celsius</span>
      </div>
      <div className='input-group  mt-4'>
        <input type="number" value={fahrenheit} onChange={fahrenheitChange} className="form-control" id="fahrenheit" />
        <span className="input-group-text" id="fahrenheit">Fahrenheit</span>
      </div>
    </div>
  )
}
