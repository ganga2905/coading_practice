import React from 'react'
import Show from './components/Show';
import Toggle from './components/Toggle';
import { useState } from 'react';
import Users from './components/Users';
import { useEffect } from 'react';
import axios from'axios';

const App = () => {

  const[user,setUser]=useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setUser(res.data))
    .catch((err)=>console.log(err.message)
    )

  },[])

  return (
    <div>

      <Show/>
      <Toggle/>
      <Users user={user}/>

    </div>
  )
}

export default App;