import React from 'react'
import { useState } from 'react';


const Show = () => {

    const[password,setPassword]=useState(false);

  return (
    <div>

        <input type={password?"type":"password"} 
        placeholder='Enter the name'/><br/>
        <button onClick={()=>setPassword(!password)}>
            {password?"hide":"show"}
            </button>

    </div>
  )
}

export default Show