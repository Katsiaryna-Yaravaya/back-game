const express = require('express');
const Datastore = require('nedb');
const app = express();
const cors = require('cors')
// const {playersConfig} = require("./randomaizer");

app.use(cors())

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/init', function (request, response) {
    // database.insert(playersConfig())
    response.send("init");
});

app.get('/players', function (request, response) {
    response.send(database.getAllData());
});

app.post('/changePlayer',  express.json(),(req, res) => {
    console.log(req.body.id);
    res.sendStatus(201);
});

app.listen(8080, () => console.log('Server is up and running on port 8080'));

// nodemon
