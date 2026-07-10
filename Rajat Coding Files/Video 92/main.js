const express = require('express');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Samsung";
    let searchText = "Search Samsung"
    res.render("index", { siteName, searchText })
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Samsung"
    let blogContent = "Search Samsung"
    res.render("index", { blogTitle:blogTitle, blogContent:blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})