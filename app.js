const express = require("express");
const app = express();
const PORT = 3000;
const { data } = require('./data')


app.get("/",(req,res)=>{
    res.json(data)
})

app.get('/category/:id', (req, res) => {
    res.send(`<h1>category page</h1>`)
})

app.get('/recipe/:id/:category', (req, res) => {
    const { id } = req.params
    const { category } = req.params
    const recipe = data[category].find((recipe) => recipe.id === Number(id))

    if(!recipe){
        return res.status(404).send("Recipe not found")
    }
    res.json(recipe);
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})

// postgre version
// const { Pool } = require('pg');
// const express = require("express");
// const app = express();

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'recipes',
//     password: '123456789',
//     port: 5432,
// });

// app.get("/", (req,res) => {
//     pool
//       .query('SELECT * FROM recipes;')
//       .then(data => res.json(data.rows))
//       .catch (e => res.sendStatus(500));
// });

// app.listen('3000', () => console.log('connected'));