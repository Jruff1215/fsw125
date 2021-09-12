const express = require('express');
const todoRouter = express.Router();
const { v4: uuidv4 } = require('uuid')

let todoInfo = [ 
    { "name": "Wash the dishes", 
    "description": "Wash all the dishes that are not clean", 
    "completed": "true",
    _id: uuidv4() },
    {"name": "Run the vacuum", 
    "description": "Run the vacuum in all the rooms with carpet", 
    "completed": "false",
    _id: uuidv4() }
];

todoRouter
.get('/', (req, res) => {
    res.send(todoInfo)
})

.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const oneTodo = todoInfo.find(todo => todo._id === todoId);

    res.send(oneTodo);
    return todoId
})

.post('/', (req, res) => {
    const newTodo = req.body;
    newTodo._id = uuidv4();
    todoInfo.push(newTodo);

    console.log(todoInfo)
    res.send(`Succesfully added ${newTodo} to the database`);
})

.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todoInfo.findIndex(todo => todo._id === todoId);
    todoInfo.splice(todoIndex, 1);

    res.send('Successfully Deleted');
})
.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todoInfo.findIndex(todo => todo._id === todoId);
    Object.assign(todoInfo[todoIndex], req.body);

    res.send(`Successfully Updated`)
})

module.exports = todoRouter;