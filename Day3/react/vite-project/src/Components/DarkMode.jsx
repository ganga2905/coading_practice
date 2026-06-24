import React, { useState } from 'react'

const DarkMode = () => {
    const[dark,setDark]=useState(false)
  return (
    <div style={{backgroundColor:dark?"black":"white",
        height:"100vh",
        width: "100vw"
    }}>
        <button onClick={()=>setDark(!dark)}>{dark?"light":"dark"}</button>

    </div>
  )
}

export default DarkMode