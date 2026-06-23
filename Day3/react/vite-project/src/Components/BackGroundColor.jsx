import React from 'react'
import { useState } from 'react'

const BackGroundColor = () => {

    const[color,setColor]=useState(false)

  return (
    <div style={{backgroundColor: color?'skyblue':"pink",
        width: "100vw",
        height: "100vh"

    }}>
        <button onClick={()=>setColor(!color)}>ChangeColor</button>



    </div>
  )
}

export default BackGroundColor