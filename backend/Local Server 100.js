const express = require("express");
const mysql = require('mysql');
//import axios from "axios";
//const axios = require('axios');
const bodyParser = require('body-parser');

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
const port = 5000; // 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



app.get("/api", (req, res) =>
{
    res.json({ "users": ["a", "b", "c", "24"] })
    // console.log("server connd")
})


app.post('/shifters', (req, res) =>
{
    //res.json(req.body);
    const body = req.body;
    //const body = req.data;
    let username = body.username;
    let password = body.password;


    let post = { username, password };
    let sql = `INSERT INTO tester01 SET ?`;

    let query = db.query(sql, post, (err, result) =>
    {
        if (err) throw err;
        console.log(result);
        res.send('input into tabel tester01 24');
        // res.sendFile(__dirname + '/public/thanks.html')
    })

});

app.get('/mylam/1', (req, res) =>
{
    //res.json(req.body);

    res.json({ "username": "nolam", "password": "longgone" })
});

app.post('/mylam/1', async (req, res) =>
{
    // res.json(req.body);

    const body = req.body;
    let username = body.username;
    let password = body.password;
    console.log(body);
    let post = { username, password };
    //let post = { username: "wow", password:"chaw"}
    let sql = `INSERT INTO tester01 SET ?`;

    let query = db.query(sql, post, (err, result) =>
    {
        if (err) throw err;
        //console.log(result);

        res.send("body oh wow");
        // res.sendFile(__dirname + '/public/thanks.html')
    })

})








app.listen(port, () =>
{
    console.log(`server started on port ${port}`)
})