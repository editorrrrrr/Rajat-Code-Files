// in get request there are certain limit for this program and this could be fulfill by getting these request for get as well as post and many more.
const express = require('express');
const app = express()
const port = 3000
const blog = require('./routes/blog');

app.use(express.static("public"))
app.use('/blog', blog);

app.get('/', (req, res) => {
  console.log("Hey its a get request")
  res.send('Hello World i am get request!')
}).post('/', (req, res) => {
  console.log("Hey its a post request")
  res.send("Hello world i am post request!")
}).put('/', (req, res) => {
  console.log("Hey its a put request")
  res.send("Hello world i am put request!")
})
app.get('/index', (req, res) => {
  console.log("Hey its an index file")
  res.sendFile('templates/index.html',{root:__dirname})
})
// this is how u can show what is in the HTML file using this method
app.get('/api', (req, res) => {
  console.log("Hey its an apifile")
  res.send('a:1,b:2,c:3,d:4')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})