const express = require('express');
const app = new express();

let loginDetails = [];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

// fetch months
app.get("/fetchMonth/:num", (req, res) => {
    const months = [
        "January", "February", "March", 
        "April", "May", "June", "July", "August", 
        "September", "October", "November", "December"
    ]
    const number = parseInt(req.params.num)
    if(number < 1 || number > 12){
        return res.status(400).json({message: "Not a valid month number"})
    }
    return res.send(months[number-1])
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

