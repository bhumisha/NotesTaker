const fs = require('fs');
const path = require('path');

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
    notesLoalArray.push(note);
    writeToFile(notesLoalArray);
    return note;
}
function writeToFile(notesLoalArray){
    fs.writeFileSync(
        path.join(__dirname, './Develop/data/db.json'),
        JSON.stringify(notesLoalArray, null, 2)
      );
}
function validateNoteParam(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}


module.exports = {
    findById,
    deleteById,
    createNewNote,
    validateNoteParam
  };
  