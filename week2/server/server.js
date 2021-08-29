const express = require('express');
const app = express();

const PORT = 3000;

let waters = [
    { name: 'Fiji', type: 'Natural Artesian'},
    { name: 'Deer Park', type: 'Spring Water'},
    { name: 'Essentia', type: 'Alkaline'},
    { name: 'Aquafina', type: 'Purified'},
    { name: 'Perrier', type: 'Mineral'}
]

let players = [
    { name: 'Paul Pierce', sport: 'Basketball'},
    { name: 'Troy Polamalu', sport: 'Football'},
    { name: 'Allyson Felix', sport: 'Track'},
    { name: 'Tyson Gay', sport: 'Track'},
    { name: 'Michael Phelps', sport: 'Swimmer'}
]

let sportsTeam = [
    { name: 'Steelers', location: 'Pittsburgh'},
    { name: 'Browns', location: 'Cleveland'},
    { name: 'Cowboys', location: 'Dallas'},
    { name: 'Lakers', location: 'Los Angeles'},
    { name: 'Celtics', location: 'Boston'}
]

app.get('/waters', (req, res) => {
    res.send(waters)
});

app.get('/players', (req, res) => {
    res.send(players)
});

app.get('/sportsTeam', (req, res) => {
    res.send(sportsTeam)
});

app.listen(PORT, () => {
    console.log(`App started at: http://localhost:${PORT}/`)
});