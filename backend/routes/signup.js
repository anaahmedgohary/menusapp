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
    console.log('Connected to PlanetScale db!');
    //db.end();
});




router.post('/newuser', async (req, res) =>
{

    let sql = `SELECT * FROM simptab`
    let queryCheck = db.query(sql, async (err, results) =>
    {
        if (err) throw err;

        const users = results;
        const user = await users.find(user => user.username === req.body.username);

        if (user)
        {
            console.log('user with this email already exist');
            return res.status(400).send('this email is already used!')
        } else
        {
            try
            {
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(req.body.password, salt);

                const body = req.body;
                let username = body.username;
                let password = hashedPassword;
                let post = { username, password };
                // let sql = `INSERT INTO simptab SET ?`;
                // local
                let sql = `INSERT INTO simptab SET ?`; // tester01 simptab

                let query = db.query(sql, post);

                res.status(200).send("done with new form");

            } catch (e)
            {
                console.log(e)
                // res.status(500).send('no new form')
            }
        }
    });

    
})

// old
// router.post('/adduser', async (req, res) =>
// {
//     try
//     {
//         const salt = await bcrypt.genSalt();
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);

//         const body = req.body;
//         let username = body.username;
//         let password = hashedPassword;
//         let post = { username, password };
//        // let sql = `INSERT INTO simptab SET ?`;
//         // local
//         let sql = `INSERT INTO simptab SET ?`;

//         let query = db.query(sql, post, (err, result) =>
//         {
//             if (err) throw err;
//             //console.log(result);

//             res.send("signup success");
//             // res.sendFile(__dirname + '/public/thanks.html')
//         });

//     } catch {
//         res.status(500).send('signup failed!')
//     }
// })







module.exports = router;