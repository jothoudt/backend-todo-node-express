//require
const express = require('express');
const bodyParser= require('body-parser');
const pool = require('./modules/pool');
const app= express();
//define tasksRouter for route
const tasksRouter=require('./routes/tasks.router');
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//----Route----
app.use('/api/tasks/', tasksRouter)
//serve static files
app.use(express.static('build'));
//App set
const PORT = process.env.PORT || 5000;
// ***LISTEN***//
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})