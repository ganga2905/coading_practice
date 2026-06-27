import React, { useState } from 'react'
import AddViewCard from './AddViewCard';

const AddToCard = () => {
    const[data,setData]=useState('');
    const[list,setList]=useState([]);

    const handleAdd=()=>{
       if(data){
        setList((prevList)=>[...prevList,data]);
        setData(''); 
        
       }
    }


  return (
    <>
    <div>
        <input type="text"
        placeholder='Enter Card'
        value={data}
        onChange={(e)=>setData(e.target.value)}

        />
        <button onClick={handleAdd}>Add</button>

    </div>
    
    <AddViewCard list={list}/>
    </>
  )
}

export default AddToCard;