// const { Pool } = require('pg');
// const express = require("express");
// const app = express();

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'recipes',
//     password '123456789',
//     port: 5432,
// });


// app.get("/", (req,res) => {
//     pool
//       .query('SELECT * FROM recipes;')
//       .then(data => res.json(data.rows))
//       .catch (e => res.sendStatus(500));
// });

// app.listen('3000', () => console.log('connected'));