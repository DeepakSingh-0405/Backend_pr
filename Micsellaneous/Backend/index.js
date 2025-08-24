const express = require("express")
const app = express()
const port = 8080

app.use(express.urlencoded({extended: true})) // Middleware to parse URL-encoded bodies (for form submissions). if request data coming from forms.
app.use(express.json()) // Middleware to parse JSON bodies if json data is coming from request


app.get("/register", (req, res) => {
    const { username, password } = req.query
    // Handle GET request (e.g. fetch user data)
    res.send(`GET request received. Username: ${username}`)
})

app.post("/register", (req, res) => {
    // all the data coming from request is in the req.body as an object but we have to parse for express to understand it. it is done in line 5.
    const {username} = req.body

    // Handle POST request (e.g. create new user)
    res.send(`POST request received. Username: ${username}`)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})