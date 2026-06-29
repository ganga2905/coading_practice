import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Joke = () => {
    const[joke,setJoke]=useState({});
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");

    const getJoke= async()=>{
        try{
            setLoading(true);
            setError('')

            
            const res=await axios.get(  "https://official-joke-api.appspot.com/random_joke")
         setJoke(res.data)
    }
        catch(err){
            setError("something went wrong");
            console.log(err.message);
            

        }finally{
            setLoading(false)
        }

    }
    useEffect(()=>{
        getJoke()
    },[])


  return (

    <div>
        <h1>random joke generated </h1>
        {
            loading&& <h1>Loading....</h1>
        }
        {error&& <h1>{error}</h1>}
        {
            !loading&&!error&&(
                <>
                <h3>{joke.setup}</h3>
                 <h3>{joke.punchline}</h3>
                </>
            )
        }
        <button onClick={getJoke}>Next joke</button>


    </div>
  )
}

export default Joke;
















































































































































































// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const Joke = () => {
//     const[data,setData]=useState({});
//     // const[time,setTime]=useState(true)
// const getJoke=()=>{
//     axios.get("https://official-joke-api.appspot.com/random_joke")
//     .then((res)=>setData(res.data))
//     .catch((err)=>console.log(err.message)
//     )
// }
// useEffect(()=>{
//     getJoke()
//     const interval=setInterval(()=>{
//         getJoke()

//     },1000)
//     return ()=>clearInterval(interval)
// },[])



//   return (
//     <div>
//         {
//             data&& 
//             <div>
//                 <p>{data.punchline}</p>
//                 <p>{data.setup}</p>
//                 </div>
//         }

//     </div>
//   )
// }

// export default Joke