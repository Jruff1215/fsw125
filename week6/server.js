const express = require('express');
const app = express();

const fruitRouter = require('./fruitRouter');

const PORT = 5000;

app.use(express.json())

app.use('/fruitInfo', fruitRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})