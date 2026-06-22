import React, { useState } from 'react'

const Input = () => {
    const[data,setData]=useState('')
  return (
    <div>
        <input type="text"
         placeholder='Enter The Name ' 
         value={data}
         onChange={(e)=>setData(e.target.value)}/><br/>
         
            <h1>{data}</h1>
    
    </div>
  )
}

export default Input