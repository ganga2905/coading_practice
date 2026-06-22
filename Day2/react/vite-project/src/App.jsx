import React from 'react'
import Show from './components/Show';
import Toggle from './components/Toggle';
import { useState } from 'react';
import Users from './components/Users';
import { useEffect } from 'react';
import axios from'axios';
import Input from './components/Input';
import Filter from './components/Filter';

const App = () => {

  const[user,setUser]=useState([]);


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
      <Input/>
      <Filter/>

    </div>
  )
}

export default App;