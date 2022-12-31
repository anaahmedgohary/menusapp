const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

// const mysql = require('mysql');
const mysql = require('mysql2');

require('dotenv').config();
//const db = mysql.createConnection(process.env.DATABASE_URL);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'pma',
    password: '',
    database: 'node24db' //table tester01

});



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

router.get('/', (req, res) =>
{
    res.send('weeeeeeee')
})



router.post('/get/users', async (req, res) =>
{

    let sql = `SELECT * FROM tester01`;
    let query = db.query(sql, async (err, results) =>
    {
        if (err) throw err;
        res.send('got z results');
        console.log('got z results');
      //  res.send(results);
       // console.log(results);
        
        const users = results;
        const user = users.find(user => user.username === req.body.username);

        if (user == null)
        {
            return res.status(400).send('cannot find user')
        }

        try
        {
            if (await bcrypt.compare(req.body.password, user.password))
            {
                res.send('login is all good')
            } else
            {
                res.send('incorrect email or incorrect password')
            }
        } catch {
            res.status(500).send('no userconn');
        }

    })
})


router.post('/users/login', async (req, res) =>
{
    
    let sql = `SELECT * FROM simptab`;
    let query = db.query(sql,  (err, results) =>
    {
        if (err) throw err;
        var users = results;
        const user = users.find(user => user.username === req.body.username);
    })

    const user = users.find(user => user.username === req.body.username);

    if(user == null) {
        return res.status(400).send('cannot find user')
    }
    try
    {
        if (await bcrypt.compare(req.body.password, user.password))
        {
           res.send('login is all good')
        } else
        {
            res.send('incorrect email or incorrect password')
       }
    } catch {
        res.status(500).send('no userconn');
    }
})













module.exports = router;