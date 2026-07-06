const express = require('express');
const app = express()
const port = 3000
app.use(express.static('public'));
// app.get or app.put or app.delete or app.post(path, handler)
app.get('/about/', (req, res) => {
  res.send('Hello World i am ginie!')
})
app.get('/about/:slug', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send(`hello ${req.params.slug}`)
})
// app.get('/Contact', (req, res) => {
//   res.send('Contact Me')
// })
// app.get('/blog', (req, res) => {
//   res.send('see blog')
// })
// app.get('/home', (req, res) => {
//   res.send('My website')
// })
// app.get('/query', (req, res) => {
//   res.send('queriessssssssssss..........................................')
// })
// app.get('/server', (req, res) => {
//   res.send('Server is loading and now u get this')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})