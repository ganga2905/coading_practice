import React, { useState } from 'react'

const Counter = () => {

    const[count,setCount]=useState(0)
  return (
    <div>
        <h1>count :{count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
        <button onClick={()=>setCount(prev=>prev-1)} disabled={count<=0}>Decrease</button>
        </div>
  )
}

export default Counter