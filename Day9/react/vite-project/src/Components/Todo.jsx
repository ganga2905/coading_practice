import React, { useState } from 'react'

const Todo = () => {
    const[text,setText]=useState('');
    const[todo,setTodo]=useState([]);

    const handleclick=(e)=>{
        if(text.trim() == '') return
        setTodo([...todo,text]);
        setText('')
    }
    const handleDelete=(indexDelete)=>{
        setTodo(prev=> prev.filter((ele,index)=> index !==indexDelete))

    }


  return (
    <div>
        <input type='text'
         placeholder='Enter The Item'
         value={text}
          onChange={(e)=>setText(e.target.value)} /> 
          <button onClick={handleclick}>Add</button>

          {
            todo.map((ele,index)=>(
                <li key={index}>{ele} 
                <button onClick={()=>handleDelete(index)}>Delete</button>
                </li>
    
            ))
          }



    </div>
  )
}

export default Todo