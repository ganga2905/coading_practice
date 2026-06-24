import React from 'react'
import { useState } from 'react'

const FormValid = () => {

    const[user,setUser]=useState({
        name:"",
        email:"",
        password:""

    })
  const[error,setError]=useState('');

    const handleChange=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!user.name){
            setError("username required")
            return
        }
         if(!user.email){
            setError("email required")
            return
        }
         if(!user.password){
            setError("password required")
            return
        }
        setError('')
        alert("Form submitted Suceesfully")
        
        setUser({
            name:'',
            email:'',
            password:''
        })



    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Enter Name'
            value={user.name}
            name='name'
             onChange={handleChange}/>
            <br/>
            <input type="email"
            placeholder='Enter Email'
            value={user.email}
            name='email'
             onChange={handleChange}/>
            <br/>
            <input type="password"
            placeholder='Enter Password'
            value={user.password}
            name='password'
             onChange={handleChange}/>
            <br/>
            <button type='submit'>submit</button>

        </form>
        <h2>{error}</h2>
    </div>
  )
}

export default FormValid