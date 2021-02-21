
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { findById, deleteById, createNewNote, validateNoteParam } = require('../../lib/notesOperation');
const notesArray = require('../../data/db');


router.get("/notes",(req,res) => {
    res.json(notesArray);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notesArray);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
});

router.delete('/notes/:id', (req, res) => {
    const result = deleteById(req.params.id, notesArray);
    if (result) {
      res.json(result);
    } else {
      res.status(404).send('The Note is not found');
    }
});

router.post("/notes",(req,res) => {
    req.body.id = uuidv4().toString();

    if(!validateNoteParam(req.body)){
        res.status(400).send('The note is not properly formated ');
    }
    else{
        const newNote = createNewNote(req.body, notesArray);
        res.json(newNote);
    } 
});

module.exports = router;
