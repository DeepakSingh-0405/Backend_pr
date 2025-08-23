const express = require('express');

const app = express();
const port = 3000;

// app.use((req,res)=>{
//     res.send("<h1>Hello this is a backend server</h1><h2>This will be visible at every route bcz it is send using use()</h2>")
// })

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Home</h1>")
})
app.get('/About',(req,res)=>{
    res.send("<h1>About route</h1>")
})

//instead of * we use {0,} as a wildcard in express 4.
app.get('{0,}', (req,res)=>{
    res.send("Any route other than the mentioned")
})

//we can also resolve post request
// app.post('/Contact',(res,req)=>{
//     res.send("<h1>Contact route</h1>")
// })

//Path parameters - Path parameters, also known as path variables, are dynamic segments embedded directly within the URL path of an API endpoint. They are used to identify or specify a particular resource or a specific instance of a resource within a collection.
app.get('/:username/:id',(req,res)=>{
    let {username, id} = req.params
    res.send(`<h1>Custom path username: ${username} and id: ${id}</h1>`)
})

//query string - A query parameter, also known as a query string parameter, is a key-value pair appended to the end of a URL after a question mark (?). It provides additional information to a web server or application when making a request.
//Are not the part of route
// app.get('/search?q="microsoft"',(req,res)=>{
//     let {q} = req.query;
//     if(!q) res.send("<h1>No query string</h1>");
//     res.send(`<h1>Your Query: ${q}</h1>`);

// })


app.listen(port, (req,res)=>{
    console.log("Server is listening")
})