import React from 'react'
import { useState } from 'react'

const Crud = () => {
    const[name,setName]=useState('');
    const[user,setUser]=useState([]);
    const[edit,setEdit]=useState(null);

    const handleSubmit=()=>{
        if(!name) return


        






    }



  return (
    <div>
        <input type="text"
        placeholder='Enter Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <button  onClick={handleSubmit}>Add</button>



    </div>
  )
}

export default Crud