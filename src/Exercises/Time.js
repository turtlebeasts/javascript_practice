import React, { useEffect, useState } from 'react'

export default function Time() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  useEffect(() => {
    const date = new Date()
    setTimeout(() => { setSeconds(date.getSeconds()) }, 1000)
    setTimeout(() => { setMinutes(date.getMinutes()) }, 1000)
    setTimeout(() => { setHours(date.getHours()) }, 1000)
  }, [seconds])
  return (
    <div>
      <h3>
        {(hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds)}
      </h3>
    </div>
  )
}
