const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');

require('@babel/register');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())

app.use("/api", userRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log("Conectado a la base de datos Atlas"))
    .catch(error=> console.error(error));

app.get("/", (req, res)=>{
    res.send('Hola desde el Api')
})

app.listen(port, ()=> 
    console.log("Server listening on port", port)
);