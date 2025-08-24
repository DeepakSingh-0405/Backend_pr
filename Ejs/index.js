//EJS - Embedded Javascript Templates

const express = require("express");
const path = require("path")

const app = express();
const port = 3000;

//using ejs
app.set("view engine", "ejs");//it sets the express's view engine to ejs 

app.set("views", path.join(__dirname, "/views"))// it ensures that views folder will always be searched in the current directory of server dosen't matter from where the server is launched. Without adding this we have to start the server from the current directory of the server.


// in ejs we render the response 
// send is used for sending the response like html or some text, etc
// render is used for sending files in response
// by default the express's view engine searches the rendered file in the views named folder which we had to make 
app.get('/',(req,res)=>{
    res.render("home.ejs");
})
app.get('/random',(req,res)=>{
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    res.render("random.ejs", { randomNumber });
})

// we gave data to the ejs file to render it
// the data will fetched in index.js not in ejs files from the database
// all the computed data will be passed to the ejs file as an object
app.get('/date',(req,res)=>{
    const date = new Date().toLocaleTimeString();
    res.render("date.ejs", { date:date });
})

//variable insta page based on request
app.get('/insta/:username',(req,res)=>{
    const followers = ["user1", "user2", "user3"];
    const {username} = req.params;
    res.render('instapage.ejs', { username, followers });
})

//sending data coming from database to the ejs file and render according to the request
app.get('/instagram/:username',(req,res)=>{
    const {username} = req.params;
    const data = require('./data.json')
    const userdata = data[username];
    // console.log(userdata);
    if(userdata) {
        res.render('instagram_data.ejs', { userdata });
    } else {
        res.status(404).send("User not found");
    }
})

app.listen(port,(req,res)=>{
    console.log("app is listening")
})
