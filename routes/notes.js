const fb = require('express').Router();

// Destruct functions from helper js file
const {readFromFile, readAndAppend} = require('../helpers/fsUtils')

// GET Route for retrieving all notes from db
fb.get('/', (req,res) => {
    console.info(`${req.method} request recieved for notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = fb;