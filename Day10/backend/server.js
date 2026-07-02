const express=require ('express');

const app=express();

app.use(express.json());


let user=[
    {id:1,name:"ganga",role:"developer"},
     {id:2,name:"gayathri",role:"testing"},
      {id:3,name:"hariush",role:"devops"}
];


app.get('/users',(req,res)=>{
    res.status(200).json(user);
});


app.get('/users/:id',(req,res)=>{
    res.json(user);
})

// app.put('/users',(req,res)=>{

// })


app.listen(3000,()=>{
    console.log("serevr listening ")
})






