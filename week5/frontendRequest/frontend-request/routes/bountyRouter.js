const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let bountyInfo = [
    { firstName: "Darth",  lastName: "Bandon", living: "Deceased", bounty: "5000 Credits", type: "Sith",
_id: uuidv4() },
    { firstName: "Bill",  lastName: "Erso", living: "Alive", bounty: "5000 Credits", type: "Jedi",
_id: uuidv4() },
    { firstName: "Darth",  lastName: "Malak", living: "Deceased", bounty: "15000 Credits", type: "Sith",
_id: uuidv4() },
    { firstName: "Visas",  lastName:"Marr", living: "Alive", bounty: "10000 Credits", type: "Jedi",
_id: uuidv4() },
    { firstName: "Noab",  lastName: "Hulis", living: "Deceased", bounty: "2500 Credits", type: "Jedi",
_id: uuidv4() },
    { firstName: "Darth",  lastName: "Nihilus", living: "Alive", bounty: "20000 Credits", type: "Sith",
_id: uuidv4() },
    { firstName: "Revan", lastName: "Unknown", living: "Deceased", bounty: "50000 Credits", type: "Jedi",
_id: uuidv4() },
    { firstName: "Meetra",  lastName: "Surik", living: "Deceased", bounty: "25000 Credits", type: "Jedi",
_id: uuidv4() },
];

bountyRouter
    .get('/', (req, res) => {
        res.send(bountyInfo)
    })

    .get('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId;
        const oneBounty = bountyInfo.find(bounty => bounty._id === bountyId);

        res.send(oneBounty);
    })

    .post('/', (req, res) => {
        const newBounty = req.body;
        newBounty._id = uuidv4();
        bountyInfo.push(newBounty);

        res.send(newBounty);
    })

    .delete('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bountyInfo.findIndex(bounty => bounty._id === bountyId);
        bountyInfo.splice(bountyIndex, 1);

        res.send('Successfully Deleted');
    })
    .put('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bountyInfo.findIndex(bounty => bounty._id === bountyId);
        Object.assign(bountyInfo[bountyIndex], req.body);

        res.send(`Successfully Updated`)
    })

module.exports = bountyRouter;