import mongoose, { mongo } from "mongoose"
import express from 'express';
import { Todo } from "./models/Todo.js";

await mongoose.connect("mongodb://localhost:27017/")


const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const todo = new Todo({ title: 1 , desc: "Description of the box", isDone: false , days : Math.floor(Math.random()*45 ) })
    todo.save()
    res.send('Hello World!');
});

app.get('/ab', async (req, res) => {
  let todo =  await Todo.findOne({})
  console.log(todo)
  res.json({title : todo.title, desc : todo.desc})

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});