const express = require('express');

const todoRouter = require('./todoRouter');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/todoInfo', todoRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})
 