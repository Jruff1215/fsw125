const express = require('express');
const morgan = require('morgan')

const bountyRouter = require('../routes/bountyRouter');

const app = express();
const PORT = 9000;

app.use(express.json())
app.use(morgan('dev'));

app.use('/bountyInfo', bountyRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});


