const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

// const mysql = require('mysql');
const mysql = require('mysql2');

require('dotenv').config();
const db = mysql.createConnection(process.env.DATABASE_URL);

// local
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
    console.log('DELETE FROM Connected');
    //db.end();
});



router.post('/finduser', async (req, res) =>
{

    let sql = `SELECT * FROM simptab`; // tester01 simptab
    let query = db.query(sql, async (err, results) =>
    {
        if (err) throw err;
        console.log('got z results');

        const users = results;
        const user = await users.find(user => user.username === req.body.username);

        if (user == null)
        {
            console.log('no user with this email');
            return res.status(400).send('no user with this email')
        }

        try
        {
            let founduser = await user.username
            res.send(founduser);
            console.log('user was found');
            
        } catch {
            res.status(500).send('no userconn');
        }

    })
})


router.post('/updateuser', async (req, res) =>
{
    // res.json(req.body);
    try
    {

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const body = req.body;
        let username = body.username;
        let password = hashedPassword;
        // let post = { username, password };
        // let sql = `INSERT INTO tester01 SET ?`;
        let updateSql = `UPDATE simptab SET password = '${password}' WHERE username = '${username}'`;
    
        let query = db.query(updateSql, (err, result) =>
        {
            if (err) throw err;
            //console.log(result);
            res.status(200).send("USER UPDATED!");
            // res.sendFile(__dirname + '/public/thanks.html')
        })
    } catch {
        res.status(500).send();
    }

})


router.post('/deleteuser', async (req, res) =>
{
    // res.json(req.body);

    const body = req.body;
    let username = body.username;
   // let password = body.password;
   // let post = { username, password };
   // let sql = `INSERT INTO tester01 SET ?`;
    let deleteSql = `DELETE FROM tester01 WHERE username = ${username}`;

    let query = db.query(deleteSql, (err, result) =>
    {
        if (err) throw err;
        //console.log(result);
        res.send("USER DELETED!");
        // res.sendFile(__dirname + '/public/thanks.html')
    })

})

router.post('/newuser', async (req, res) =>
{
    try
    {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const body = req.body;
        let username = body.username;
        let password = hashedPassword;
        let post = { username, password };
        let deleteSql = `delete from tester01 where username=${username}`;
        let sql = `INSERT INTO tester01 SET ?`; // tester01 simptab

        let query = db.query(sql, post)

        res.send("done with new form");

    } catch {
        res.status(500).send('no new form')
    }
})




















module.exports = router;