const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

// const mysql = require('mysql');
const mysql = require('mysql2');

require('dotenv').config();
const db = mysql.createConnection(process.env.DATABASE_URL);

// local dev
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'pma',
//     password: '',
//     database: 'node24db' //table tester01

// });



db.connect((err) =>
{
    if (err)
    {
        throw err;
    };
    console.log('Connected to login db!');
    // console.log(process.env.port);
    //db.end();
});






router.get('/', (req, res) =>
{
    const str = [{
        "name": "maylam",
        "locate": "giza"
    }];
    res.end(JSON.stringify(str));
});

router.post("/addmanlam", (req, res) =>
{
    res.end('NA')
});


router.post('/authuser', async (req, res) =>
{

    let sql = `SELECT * FROM simptab`;
    let query = db.query(sql, async (err, results) =>
    {
        if (err) throw err;
       // res.send('got z results');
        console.log('got z results');
        //  res.send(results);
        // console.log(results);

        const users = results;
        const user = await users.find(user => user.username === req.body.username);

        if (user == null)
        {
            return res.status(400).send('cannot find user')
        }

        try
        {
            if (await bcrypt.compare(req.body.password, user.password))
            {
                res.send('login is all good')
                console.log('got z user');
            } else
            {
                res.status(400).send('password wrong')
               // res.send('incorrect email or incorrect password')
                console.log('got nooo user');
            }
        } catch {
            res.status(500).send('no userconn');
        }

    })
})














module.exports = router;