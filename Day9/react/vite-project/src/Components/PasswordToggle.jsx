import React, { useState } from 'react'

const PasswordToggle = () => {

    const[data,setData]=useState('')
    const[show,setShow]=useState(false)

    const toggleShow=()=>{
        setShow(!show)
    }
  return (
    <div>
        <input type={show?"text":"password"} 
        placeholder='Enter Password'
        value={data}
        onChange={(e)=>setData(e.target.value)}/><br/>
        <button onClick={toggleShow}>{show?"hide":"show"}</button>
    </div>
  )
}

export default PasswordToggle