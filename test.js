const { Pool } = require('pg');
const express = require("express");
const app = express();

const pool = new Pool({
    user: '',
    host: '',
    database: '',
    password '',
    port: ,
});

app.get("/", (req,res) => {
    pool
      .query('')
      .then(data => res.json(data.rows))
      .catch (e => res.sendStatus(500));
});

app.listen('3000', () => console.log('connected'));