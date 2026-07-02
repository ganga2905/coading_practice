import React, { useEffect, useState } from 'react'

const Fetch = () => {
   const[data,setData]=useState([]);
   const[loading,setLoading]=useState(true);
   const[error,setError]=useState('')

   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((datas)=>setData(datas))
    .catch((err)=>{
      setError(err.message)  
    })
    .finally(()=> setLoading(false))

   },[])

  return (
    <div>

        {loading&& <p> Loading....</p>}
        {error&& <p>{error} </p>}
        {
            data.map((e)=>(
                <li key={e.id}>{e.name}</li>
            ))
        }

    </div>
  )
}

export default Fetch