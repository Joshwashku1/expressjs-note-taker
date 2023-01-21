const notes = require('express').Router();
const uuid = require('../helpers/uuid');
// Destruct functions from helper js file
const {readFromFile, writeToFile, readAndAppend  } = require('../helpers/fsUtils')

// GET Route for retrieving all notes from db
notes.get('/', (req,res) => {
    console.info(`${req.method} request recieved for notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for creating notes
notes.post('/', (req,res) => {
    console.info(`${req.method} request recieved to add a note`);
    console.log(req.body);

    const { title, text } = req.body;

    if(title && text) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully!!`);
    } else {
        res.errored('Error in adding note');
    }
});

module.exports = notes;