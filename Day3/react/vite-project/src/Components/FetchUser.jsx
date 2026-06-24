import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchUser = () => {

    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setData(res.data))
        .catch((error)=>console.log(error.message)
        )

    },[])

  return (
    <div>
        {
            data.map((e,index)=>(
                <p key={index}>{e.name}</p>
            ))
        }

    </div>
  )
}

export default FetchUser