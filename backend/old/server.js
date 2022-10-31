const express = require('express');
const mysql = require('mysql');
// const morgan = require('morgan');
const bodyParser = require('body-parser');

// const { Prohairesis } = require('prohairesis');
// create new database instance
// const database = new Prohairesis(env.database);

/* const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    ssl: { "rejectUnauthorized": true },
}); */


const db = mysql.createConnection({
    host: 'localhost',
    user: 'pma',
    password: '',
    database: 'node24db'
});

db.connect((err) =>
{
    if (err)
    {
        throw err;
    };
    console.log("db conn 24")

});


const app = express();

// port .env for others
const port = process.env.port || 5000;

// linking the puplic html file
app.use(express.static('/public/index.html'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

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
    let query = db.query(sql, post, (err, result) =>
    {
        if (err) throw err;
        console.log(result);
         res.send('input into tabel tester01 24');
        //res.sendFile(__dirname + '/public/thanks.html')
    })

    
})


// insert data
app.get('/add1post', (req, res) =>
{
    let post = { username: 'nomberjuan', password: 'numberjtwo' };
    let sql = `INSERT INTO tester01 SET ?`;
    // (username, password) VALUES('${username}', '${password}' )`;

    let query = db.query(sql, post, (err, result) =>
    {
        if (err) throw err;
        console.log(result);
        res.send('input into tabel tester01 24')
    })

    query();
})








app.listen(port, () =>
{
    console.log('server start 24')
})



