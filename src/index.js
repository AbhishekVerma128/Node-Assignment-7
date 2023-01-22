const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
const initaldata = require("./InitialData");

console.log(initaldata[0].id)
app.get("/",(req,res)=>{
    res.send(`<h1>Student data</h1>`)
})

app.get("/api/student",(req, res)=>{
    res.json(initaldata)
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   