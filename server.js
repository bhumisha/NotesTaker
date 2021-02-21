const path = require('path');
const express = require('express');

const notesArray = require('./Develop/data/db.json');
const htmlRoutes = require('./Develop/routes/htmlRoutes');
const apiRoutes = require('./Develop/routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname + '/Develop'));
app.use(express.static('Develop'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT,() => {
    console.log(`API server now on port ${PORT}!`);
    JSON.stringify(notesArray);
});
