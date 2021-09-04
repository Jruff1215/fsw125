const express = require('express');
const app = express();

const bountyRouter = require('./routes/bountyRouter');

const PORT = 3000;

app.use(express.json())

app.use('/bountyInfo', bountyRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});


