/* eslint-disable no-unused-vars */
const express = require("express");



//console.log(process.env) // remove this after you've confirmed it is working
//console.log(process.env.SSL)

const product = require('./api/product');

 const mysql = require('mysql');
//const mysql = require('mysql2');
const bodyParser = require('body-parser');


// const routerHandler = require('./routes/handler');

require('dotenv').config();
const db = mysql.createConnection(process.env.DATABASE_URL);

// console.log('Connected to PlanetScale!');
//db.end();

db.connect((err) =>
{
    if (err)
    {
        throw err;
    };
    console.log('Connected to PlanetScale!');
    console.log(process.env.port);
    db.end();
});


const app = express();
const port = 4000 || process.env.port; // 

app.use("/api/product", product);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// app.use('/', routerHandler);





app.get("/apiold", (req, res) =>
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


app.get('/mylam/1', async (req, res) =>
{
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
        
        res.send("signup success");
        // res.sendFile(__dirname + '/public/thanks.html')
    })

})



app.listen(port, () =>
{
    console.log(`server started on port ${port}`)
})