const express = require('express');
// const port = 8000;
const bodyParser = require('body-parser');
const fs = require('fs');
const uuid = require('uuid')

const app = express();

const PORT = process.env.PORT || 8080

let scores = [];
// let highScores = [];


fs.readFile('./scores.json', 'utf-8', (err, data) => {
    console.log(err)
    scores = JSON.parse(data);
});

// highScores = scores.sort((a, b)=> a.score - b.score );

// console.log(scores, highScores)


// set body parser for urlencoded and json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// set cors to all 
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// -- ROUTES --

// implement GET endpoint that serves up list of high scores

app.get('/scores', (req, res) => {
    console.log(scores)
    res.status(200).json(scores)
}); 

app.post('/scores', (req, res) => {
    let data = (req.body);
    console.log(data);
    let score = {
        id: uuid(),
        name: data.name,
        score: data.score
    }

    if ( data.name !== undefined && data.score !== undefined && data.score >= 0) {
        scores.push(score);
        res.status(200).json({
            result: "posted!"
        })

        console.log(scores)

        fs.writeFile('./scores.json', JSON.stringify(scores, 'utf8', 2), (err) => {
            console.log(err)
        });
    } else {
        res.status(404).json({ error: 'Name and score are required.'})
    }
});


// Set up listener
app.listen(PORT, () => {
    console.log('Listening on port ', PORT);
});