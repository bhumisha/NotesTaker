const fs = require('fs');
const path = require('path');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const notesArray = require('./Develop/data/db.json');
const htmlRoutes = require('./Develop/routes/htmlRoutes');



const PORT = process.env.PORT || 3004;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname + '/Develop'));
app.use(express.static('Develop'));


function findById(id, notesLocalArray) {
    const result = notesLocalArray.filter(note => note.id === id)[0];
    return result;
}
function deleteById(id, notesLocalArray) {
    notesLocalArray.splice(notesLocalArray.findIndex(note => note.id === id),1);
    writeToFile(notesLocalArray);
    return notesLocalArray;
}

function createNewNote(body, notesLoalArray) {
    const note = body;
    notesArray.push(note);
    writeToFile(notesArray);
    return note;
}
function writeToFile(notesLoalArray){
    fs.writeFileSync(
        path.join(__dirname, './Develop/data/db.json'),
        JSON.stringify(notesLoalArray, null, 2)
      );
}
function validateInputParam(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}



app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notesArray);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
});

app.delete('/api/notes/:id', (req, res) => {
    const result = deleteById(req.params.id, notesArray);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
});

app.get("/api/notes",(req,res) => {
    console.log(`Notes ${notesArray}`);
    res.json(notesArray);
});

app.post("/api/notes",(req,res) => {
    req.body.id = uuidv4().toString();

    if(!validateInputParam(req.body)){
        res.status(400).send('The note is not properly formated ');
    }
    else{
        const newNote = createNewNote(req.body, notesArray);
        res.json(newNote);
    } 
});


app.use('/', htmlRoutes);


app.listen(PORT,() => {
    console.log(`API server now on port ${PORT}!`);
    JSON.stringify(notesArray);
});
