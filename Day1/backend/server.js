const express= require('express');

const app= express();


app.get('/',(req,res)=>{

    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.status('About Page')
})

app.get('/Contact',(req,res)=>{
    res.status('Conatct page')
})


app.listen(3000,()=>{
    console.log("server listening");
    
})