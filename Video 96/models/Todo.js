import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean,
    days : Number
});

export const Todo = mongoose.model(' todo', todoSchema);