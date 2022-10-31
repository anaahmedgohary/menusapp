const express = require('express');
//const bodyParser = require('body-parser');

require('dotenv').config();
const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log('Connected to PlanetScale!');
connection.end();


const app = express();

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
// app.use(bodyParser.json());

// handle form GET/POST request
app.post('/add4form', async (req, res) =>
{
    // res.json(req.body);
    const body = req.body;
    let username = body.username;
    let password = body.password;


    let post = { username: `${username}`, password: `${password}` };
    let sql = `INSERT INTO tester01 SET ?`;

    // eslint-disable-next-line no-unused-vars
    let query = connection.query(sql, post, (err, result) =>
    {
        if (err) throw err;
        console.log(result);
         res.send('input into tabel tester01 24');
       // res.sendFile(__dirname + '/public/thanks.html')
    })
});