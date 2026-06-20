import React, { useState } from 'react';

const Search = () => {

    const fruits = ["Apple","Banana","Orange","Mango"];

    const [search,setSearch]=useState('');

    const filterFruit=fruits.filter((fruit)=>(
        fruit.toLowerCase().includes(search.toLowerCase())

    ))


  return (
    <div>
        <input type="text" 
        placeholder='Search Fruit' 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
   <ul>
    {
        filterFruit.map((e)=>(
            <li>{e}</li>
        ))
    }
   </ul>

    </div>
  )
}

export default Search