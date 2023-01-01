const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

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
});



router.get('/', (req, res) =>
{
    const str = [{
        "name": "oooooo",
        
    }];
    res.end(JSON.stringify(str));
});



router.post('/confirmemail', async (req, res) =>
{

    let sql = `SELECT * FROM simptab`;
    let query = db.query(sql, async (err, results) =>
    {
        if (err) throw err;
        console.log('got z results');

        const users = results;
        const user = await users.find(user => user.username === req.body.username);

        if (user == null)
        {
            console.log('cannot find user');
            return res.status(400).send('cannot find user')
        }

        try
        {
            let Password = await user.password;
            recoverpassword(user, Password);
            if (Password)
            {
                res.status(200).res.send('user confirmed');
                console.log('user confirmed');
            } else
            {
                res.status(400).send('Error occured')
                // res.send('incorrect email or incorrect password')
                console.log('Try again later');
            }
        } catch {
            res.status(500).send('Error occured. Try again later.');
        }

    })
})


// Recover forgotten Password
function recoverpassword(user, password)
{
    return new Promise((resolve, reject) =>
    {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'gogoahmed13@gmail.com',
                pass: 'ksgmffptgcaktzor'
                // app pass google 'ksgmffptgcaktzor'
            }
        });

        const mail_configs = {
            from: 'gogoahmed13@gmail.com',
            to: user,
            subject: 'Password Recovery',
            text: `Dear ${user}. Your Password is ${password}`
        };

        transporter.sendMail(mail_configs, (error, info) =>
        {
            if (error)
            {
                console.log(error)
                return reject({ message: `An error has happened!` })
            }
            return resolve({ message: `Email sent succesfuly!` })
        });
    })
};















module.exports = router;