const express = require('express');
const app = express();

const bountyRouter = require('./bountyRouter');

const PORT = 3000;

app.use(express.json())

app.use('/bountyInfo', bountyRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});


