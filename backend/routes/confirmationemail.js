const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

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
    console.log('recoverPass Connected!');
});



router.get('/', (req, res) =>
{
    const str = [{
        "name": "oooooo",
        
    }];
    res.end(JSON.stringify(str));
});


// jsonwebtokens confirmation emails
const EMAIL_SECRET = 'ajsdklfjaskljgklasjoiquw01982310nlksas;sdlkfj';

router.post('/k', async (req, res) =>
{

    let sql = `SELECT * FROM simptab`; // tester01 simptab
    let query = db.query(sql, async (err, results) =>
    {
        if (err) throw err;
        console.log('got z results');

        const users = results;
        const user = await users.find(user => user.username === req.body.username);

        // if (user == null)
        // {
        //     console.log('cannot find user');
        //     return res.status(400).send('cannot find user')
        // };

        const confirmationToken = jwt.sign(user, EMAIL_SECRET);
        const url = `https://menusapp.vercel.app/confirmationemail/${confirmationToken}`;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'gogoahmed13@gmail.com',
                pass: 'ksgmffptgcaktzor' // app pass google
            }
        });
        const mail_configs = {
            from: 'gogoahmed13@gmail.com',
            to: user.username,
            subject: 'Confirm Your Email',
            html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
        };

        transporter.sendMail(mail_configs, (error, info) =>
        {
            if (error)
            {
                console.log(error);
                return res.status(500).send("Error Sending Email");
            };

            res.send("Confirmation Email Sent!")
        })

        // const foundUserName = await user.username;
        // let recoverdPassword = await user.password;

       // res.send({ foundUserName, recoverdPassword })
        
        // recoverpassword(foundUserName, recoverdPassword)
        //     .then(response => res.status(200).send(response.message))
        //     .catch(error => res.status(500).send(error.message))

    })
})


// Recover forgotten Password
async function recoverpassword(user, password)
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

// change user verification status
router.get(`/:token`, async (req, res) =>
{
    try
    {
        const user = jwt.verify(req.params.token, EMAIL_SECRET);
        const username = await user.username;

        let updateSql = `UPDATE simptab SET verified = '1' WHERE username = '${username}'`;
        let query = db.query(updateSql, async (err, results) =>
        {
            if (err) throw err;
            console.log('Updated Verification Status');
        });

        // res.redirect('http://exmple.com'+req.url)
       // res.status(200).send('Updated Verification Status');
        res.status(200).redirect('https://menusapp.vercel.app/login')
    } catch {
        res.status(500).send('failed to verify!');
    }
})















module.exports = router;