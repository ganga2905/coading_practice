import React from 'react'
import { useState } from 'react'

const Toggle = () => {

const[toggle,setToggle]=useState(true);

  return (
    <div style={{backgroundColor:toggle?"white":"black",
        height:"100vh",
        width: "100vw"
    }}>

        <button onClick={()=>setToggle(!toggle)}>Toggle</button>

    </div>
  )
}

export default Toggle