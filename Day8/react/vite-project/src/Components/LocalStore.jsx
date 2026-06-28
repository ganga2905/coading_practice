import React from 'react'
import { useState } from 'react'

const LocalStore = () => {

    const[user,setUser]=useState({
        name:'',
        email:'',
        password:""
    })

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }

    const [getdata,setgetdata]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        // if(!name){
        //     alert("enter the name required");
        //     return
        // }
        console.log(user);
        
        localStorage.setItem('userData',JSON.stringify(user))

       setgetdata(localStorage.getItem(JSON.parse(userData)))


    }


return (   
<>
<form onSubmit={handleSubmit}>
    <input type="text" 
    placeholder='Enter Name'
    name='name'
    value={user.name}
    onChange={handleChange}/><br/>
      <input type="email" 
    placeholder='Enter Email'
    name='email'
    value={user.email}
    onChange={handleChange}/><br/>
      <input type="password" 
    placeholder='Enter Password'
    name='password'
    value={user.password}
    onChange={handleChange}/><br/>
    <button type='submit'>submit</button>
</form>
<h1>{getdata}</h1>

</>
  )
}

export default LocalStore