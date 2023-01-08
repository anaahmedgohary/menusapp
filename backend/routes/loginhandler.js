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
            console.log('no user with this email');
            return res.status(400).send('can not find user with this email!')
        }

        try
        {
            if (await bcrypt.compare(req.body.password, user.password))
            {
              let loggedinSql = `UPDATE simptab SET loggedin = '1' WHERE username = '${user.username}'`;
                let loginStat = db.query(loggedinSql, (err, result) =>
                {
                    if (err) console.log(err);
                    console.log('loggin was successful');
                    return res.send('loggin success');
                })
                
            } else
            {
                console.log('password wrong');
                res.status(400).send('password is incorrect');
               // res.send('incorrect email or incorrect password')
            }
        } catch (err)
        {
            console.log(err);
            res.status(500).send(err);
        }

    })
})


// log out
router.post('/logout', async (req, res) =>
{

    try
    {
        let logoutSql = `UPDATE simptab SET loggedin = '0' WHERE username = '${req.body.username}'`;
        let loginStat = db.query(logoutSql, (err, result) =>
        {
            if (err) console.log(err);
            console.log('logged out successfully');
            return res.send('logged out successfully');
        })

    } catch (err)
    {
        console.log(err);
    }
})










module.exports = router;