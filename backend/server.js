/* eslint-disable no-unused-vars */
const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');

const routerHandler = require('./routes/handler');


const db = mysql.createConnection({
    host: 'us-east.connect.psdb.cloud',
    user: 'd1q35zdh6g7m5eslvnal',
    password: 'pscale_pw_r3G6ixIaiwDhbaD8rSNvH84o2hsA5CNJleHuEBl8XmU',
    database: 'fooddelivery',
    ssl:{ "rejectUnauthorized": true }
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
const port = process.env.port || 4000; // 5000
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/', routerHandler);



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
    let sql = `INSERT INTO user SET ?`;

    let query = db.query(sql, post, (err, result) =>
    {
        if (err) throw err;
        console.log(result);
        res.send('input into tabel user 24');
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
    let sql = `INSERT INTO simptab SET ?`;

    let query =  db.query(sql, post, (err, result) =>
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