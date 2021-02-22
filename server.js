const express = require('express');
//Db File for notes array

//HTML Routes is for path that join to Html pages.
const htmlRoutes = require('./Develop/routes/htmlRoutes');

//Api Routes is for all routes
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
});
