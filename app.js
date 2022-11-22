const express = require("express");
const app = express();
const PORT = 3000;

const { data1 } = require('./data1')

app.get("/",(req,res)=>{
    const recipe = data1.map((recipe) =>{
        const { title, description, image } = recipe
        return { title, description, image}
    })
    res.json(recipe)
})

app.get('/category/:id', (req, res) => {
    res.send(`<h1>category page</h1>`)
})

app.get('/recipe/:id', (req, res) => {
    const { id } = req.params
    const recipe = data1.find((recipe) => recipe.id === Number(id))

    if(!recipe){
        return res.status(404).send("Recipe not found")
    }
    res.json(recipe);
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})