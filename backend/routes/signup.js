const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

// const mysql = require('mysql');
const mysql = require('mysql2');

require('dotenv').config();
const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect((err) =>
{
    if (err)
    {
        throw err;
    };
    console.log('Connected to PlanetScale db!');
   // console.log(process.env.port);
    //db.end();
});



router.post('/newuser', async (req, res) =>
{
    try
    {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        let username = req.body.username;

        let post = { username, hashedPassword };
        let sql = `INSERT INTO simptab SET ?`;

        let query = db.query(sql, post, (err, result) =>
        {
            if (err) throw err;
            //console.log(result);

            res.send("signup success");
            // res.sendFile(__dirname + '/public/thanks.html')
        });

    } catch {
        res.status(500).send('hashpassfailthen')
    }
    
})

router.post('/passnewuser', async (req, res) =>
{
    try
    {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const body = req.body;
        let username = body.username;
        let password = hashedPassword;
        let post = { username, password };
        let sql = `INSERT INTO simptab SET ?`;

        let query = db.query(sql, post, (err, result) =>
        {
            if (err) throw err;
            //console.log(result);

            res.send("signup success");
            // res.sendFile(__dirname + '/public/thanks.html')
        });

    } catch {
        res.status(500).send('hashpassfailthen')
    }
})


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

    let query = db.query(sql, post, (err, result) =>
    {
        if (err) throw err;
        //console.log(result);

        res.send("signup success");
        // res.sendFile(__dirname + '/public/thanks.html')
    });

})













module.exports = router;