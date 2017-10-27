let things = require('../data/things.js')
let thingsDefault = require('../data/thingsDefault')

module.exports = {
    getThings: function(req, res) {
        res.send(things);
    },

    createThings: function(req, res) {
        var newArray = things;
        if (!req.body.title) {
            return res.status(400).send("You must title something so Ron can hate it or love it");
        }

        var newThing = {
            title: req.body.title,
            votes: 0,
            id: things.length ? things[things.length - 1].id + 1 : 1
        }
        
        newArray.push(newThing);
        res.send(newArray);
    },

    deleteThing: function(req,res) {
        if (!req.params.id) {
            return res.status(400).send("You must send and ID so Ron can throw it away")
        }
        var index = things.findIndex((e) => e.id === req.params.id * 1)
        if (index < 0) {
            return res.status(404).send("That thing doesn't exist")
        }

        things.splice(index, 1)
        res.send(things);
    },

    changeVote: function(req, res) {
        if (!req.params.id || !req.params.dir) {
            return res.status(400).send("You must send and id AND dir so Ron can throw it away")
        }
        let thingToVote = things.find((e) => e.id === req.params.id * 1)
        if (!thingToVote) {
            return res.status(404).send("No ID found")
        }
        
        req.params.dir === "up" ? thingToVote.votes++ : thingToVote.votes--;

        res.send(things);
    },

    resetData: function(req,res) {
        things = [
    {
        title:'Breakfast Foods',
        votes: 100,
        id: 1
    },
    {
        title: 'Woodworking',
        votes: 100,
        id: 2
    },
    {
        title: 'Tammy I',
        votes: -10000000,
        id: 3
    },
    {
        title: 'Tammy II',
        votes: -10000000,
        id: 4
    },
    {
        title: 'Little Sebastian',
        votes: 75,
        id: 5
    },
    {
        title:'Taxes',
        votes: -100,
        id: 6
    }
]
        res.send(thingsDefault);
    }
}

