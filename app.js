const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res,next)=>{
    res.send(`
    <h1>Home page</h1>
    <p>Welcome to our cookbook</p>
    <ul>
      <li><a href='/category/:id'>Seefood</a></li>
      <li><a href='/category/:id'>Maindish</a></li>
      <li><a href='/category/:id'>Veggy</a></li>
      <li><a href='/category/:id'>Dessert</a></li>
      <li><a href='/category/:id'>Dessert</a></li>
    </ul>
    `)
})

app.get('/category/:id', (req, res) => {
    res.send(`
    <h1>Category page!</h1>
    <p>Welcome to our category page</p>
    <h2><a href='/'>Back home</a></h2>
    `);
})

app.get('/recipe/:id', (req, res) => {
    res.send(`
    <h1>Recipe page!</h1>
    <p>Welcome to our category page</p>
    <h2><a href='/'>Back home</a></h2>
    `);;
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})