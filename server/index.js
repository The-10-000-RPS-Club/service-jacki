const express = require('express');

const bodyParser = require('body-parser');

const Questions = require('../database/Question.js');

const app = express();

const PORT = 3001;

app.use(bodyParser.json());

app.get('/api/questions', (req, res) => {
    res.send('ayo');
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})
