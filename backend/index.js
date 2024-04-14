const express = require('express');
const app = express();
const path = require('path')

const mongoose = require('mongoose');
const frontend = path.join(__dirname,"../frontend");

require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(frontend));


app.get("/", (req,res) =>{
    res.render("index")
})

mongoose.connect(process.env.DB_URL)
    .then( ()=>{
        console.log("MongoDB is connected successfully..");
    })
    .catch(error => {
        console.log("mongoDB is facing issue...");
        console.log(error);
    });

app.listen(port, ()=>{
    console.log(`app is running at port no. ${port}`);
});

// controller path
const {newData} = require("./controllers/data.controller")

// geting data from API
app.get("/getData",newData);

newData();
setInterval(newData, 5 * 60 * 1000); // after 5 min data is updating automwtically