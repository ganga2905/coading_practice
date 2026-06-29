import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DogApi = () => {

    const[dog,setDog]=useState('');
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState('');

    const getDog=async()=>{
        try{
            setLoading(true);
            setError('')

            const res=await axios.get( "https://dog.ceo/api/breeds/image/random");
            setDog(res.data.message);
        }
        catch(err){
            setError('something went wrong');
            console.log(err.message);
            
        }
        finally{
            setLoading(false)
        }

    }

    useEffect(()=>{
        getDog()
    },[])

  return (
    <div>
        <h1>Random Dog Image</h1>
        {loading&& <h5>Loading...</h5>}
        {error&& <h4>{error}</h4>}
        {!loading&& !error && dog&&(
            <img src={dog} 
            alt="Random Dog"
            width="300"
            height="300"
            style={{borderRadius:"10px"}}/>
        )}
        <br/>
        <br/>
        <button onClick={getDog}>Next Image</button>

    </div>
  )
}

export default DogApi