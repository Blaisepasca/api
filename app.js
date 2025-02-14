const express = require('express');
const app = express();

require("dotenv").config({path: "./.env"});

require("./config/database");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

 app.use("/" , require ("./routes/post.routes"));


app.listen(process.env.PORT , () =>{
    console.log(`server listening on port ${process.env.PORT}`)
});