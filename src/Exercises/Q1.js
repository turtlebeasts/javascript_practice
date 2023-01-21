import React, { useEffect, useState } from 'react'

export default function Q1() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  useEffect(()=>{
    setResult(num1*num2)
  },[num1, num2, result])
  return (
    <div>
      <h6>Write a JavaScript program to calculate multiplication and division of two numbers (input from user)</h6>
      <input type="number" onChange={(e)=>setNum1(e.target.value)} value={num1} className="form-control mt-4"/>
      <input type="number" onChange={(e)=>setNum2(e.target.value)} value={num2} className="form-control mt-4"/>
      Answer: {result}
    </div>
  )
}
