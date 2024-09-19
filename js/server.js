const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'guess_game'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/highscore', (req, res) => {
    const sql = 'SELECT score, player_name FROM highscore ORDER BY score ASC LIMIT 1';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result[0]); // Returner highscoren
    });
});

app.post('/highscore', (req, res) => {
    const { score, player_name } = req.body;
    const sql = 'INSERT INTO highscore (score, player_name) VALUES (?, ?)';
    db.query(sql, [score, player_name], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Highscore gemt!' });
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});