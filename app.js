const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res,next)=>{
    res.send("<h1>Hello world!</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})