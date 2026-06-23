import React from 'react'
import { useState } from 'react'

const CharacterCount = () => {
    const[data,setData]=useState('')

    const handleChange=(e)=>{
        setData(e.target.value)
    
    }

  return (
    <div>
        <input type="text" 
        placeholder='Enter Character'
        value={data}
        onChange={handleChange}/><br/>
        <h1>{data.length}</h1>

    </div>
  )
}

export default CharacterCount