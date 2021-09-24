const express = require('express');
const fruitRouter = express.Router();


let fruitInfo = [ 
    { name: "banana", type: "food", price: 200,},
    { name: "pants", type: "clothing", price: 2500,},
    { name: "basketball", type: "toy", price: 1000,},
    { name: "rockem sockem robots", type: "toy", price: 800,},
    { name: "soup", type: "food", price: 300,},
    { name: "flour", type: "food", price: 100,}
];

fruitRouter
    .get('/', (req, res) => {
        res.send(fruitInfo)
    })

module.exports = fruitRouter;