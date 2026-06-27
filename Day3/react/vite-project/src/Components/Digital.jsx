import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Digital = () => {

    const[time,seTtime]=useState(new Date())

 useEffect(()=>{
    const interval=setInterval(()=>{
        seTtime(new Date())
    },1000)

    return ()=>clearInterval(interval)
 },[])

  return (
    <div>
        <h1>{time.toLocaleTimeString()}</h1>

    </div>
  )
}

export default Digital



import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return 0;

    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </>
  );
}

export default Counter;