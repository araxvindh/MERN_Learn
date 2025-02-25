const express = require('express')

const app =express()

const PORT =3001

app.get("/",(req,res)=>
{
    res.send("<h1>Welcome to BackEnd Server !!</h1>")
})


app.get("/static",(req,res)=>
{
        res.sendFile("D:\\mern\\index.html")
})

app.listen(PORT,()=>
{
    console.log("Server Started Successfully")
})