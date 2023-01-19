const notes = require('express').Router();

// Destruct functions from helper js file
const {readFromFile, readAndAppend} = require('../helpers/fsUtils')

// GET Route for retrieving all notes from db
notes.get('/', (req,res) => {
    console.info(`${req.method} request recieved for notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req,res) => {
    console.info(`${req.method} request recieved to add a note`);
    console.log(req.body);

    const { title, text } = req.body;

    if(req.body) {
        const newNote = {
            title,
            text,
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully!!`);
    } else {
        res.errored('Error in adding note');
    }
});

module.exports = notes;