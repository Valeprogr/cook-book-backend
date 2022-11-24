const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const { data1 } = require('./data1')
const { data } = require("./data");


app.use(bodyParser.json(data1))
// app.get("/",(req,res)=>{
//     const recipe = data1.map((recipe) =>{
//         const { title, ingredients,procedure } = recipe
//       const uno =ingredients.map(element => element )
//       const due = uno.map(element=>`<p>${element}</p>`)
//         return res.send(due.join(''));
//     })
//     //res.send(uno)
// })

app.get("/",(req,res)=>{
    
    // const html = `<h1>List of ${recipe_type}</h1><ul> ${data[recipe_type]
    //     .map(
    //       (animal, index) =>
    //         `<li><a href=/animals/${recipe_type}/${index}>${data.title}</a></li>`
    //     )
    //     .join('')} </ul>`;
     const keys = (Object.keys(data))
     const found =`<h1>List of recipe</h1><ul>${keys.map(element => `<li>${element}</li>`).join('')}</ul>`;
     
    res.send(found)
});

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