const express = require('express');
const path=require("path");
const app=express();
app.use(express.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/welcome", function(req,res){
    res.sendFile(path.join(__dirname,"/index.html"));
})

app.get("/name",function(req,res){
    res.send(`Welcome ${req.query.user}`)
})
//////////
app.get("/login",function(req,res){
    res.sendFile(path.join(__dirname,"/login.html"));
})

app.post("/add",function(req,res){
    
    res.send(`welcome  ${req.body.user}`);
})

let arr=[
    {name:"juice", id:1},
    {name:"Pepsi", id:2},
    {name:"milk", id:3}
]
app.get("/products/:id", function(req,res){
    let id=(req.params.id);
    
    if(id <= arr.length){
        res.send(arr[id-1]);
    }
})


app.listen(5000,function(){
})

// 1.Middleware is software that lies between an operating system and the applications running on it.
// acts as a bridge between an operating system or database and applications, especially on a network.
// 2.The main purpose of the middleware is to modify the req and res objects, and then compile and execute any code that is required.
// It also helps to terminate the request-response session and call for the next middleware in the stack.


// The Global Middleware will run on every HTTP request of the application
