import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Digital = () => {

    const[time,seTtime]=useState(new Date())
 useEffect(()=>{
    const interval=setInterval(()=>{
        seTtime(new Date())
    },1000)

    return ()=>clearInterval(interval)
 },[])

  return (
    <div>
        <h1>{time.toLocaleTimeString()}</h1>

    </div>
  )
}

export default Digital