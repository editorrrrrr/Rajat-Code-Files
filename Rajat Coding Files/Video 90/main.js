const express = require('express');
const app = express()
const port = 3000
const fs = require("fs")
app.use(express.static("public"))

// this is the default way to create a middleware in js but we can also create middleware using app.use it depends on condition
// const myLogger = function (req, res, next) {
//     console.log('LOGGED');
//     next();
// };
//Middleware 1
app.use((req, res, next) => {
    req.harry= "i am boy"
    // console.log(req.header)
    // fs.appendFileSync("time.txt", `${Date.now().toString()} is a ${req.method}\n`)
    // console.log(`${Date.now().toLocaleString()} is a ${req.method}`);
    // res.send("You are underarrest")
    next();
})

//Middleware 2
app.use((req, res, next) => {
    console.log('m2');
    next();
})


app.get('/', (req, res) => {
    res.send('Hello World!')
    // console.log("are u dumb")
})
app.get('/about', (req, res) => {
    res.send('Hello about!' + req.harry) 
})
app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})