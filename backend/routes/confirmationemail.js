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

router.post('/confirmationemails', async (req, res) =>
{

    try
    {
        const userEmail = req.body.username;

        const confirmationToken = jwt.sign(userEmail, EMAIL_SECRET);
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
            to: userEmail,
            subject: 'Confirm Your Email',
            html: `Please click this Link to Verify your email: <a href="${url}">${url}</a>`,
        };
        transporter.sendMail(mail_configs, (error, info) =>
        {
            if (error)
            {
                console.log(error);
               // return res.status(500).send("Error Sending Email");
            };

            res.send("Confirmation Email Sent!")
        })


    } catch {
        res.status(500).send("Error Sending Email")
    }
    
})


// change user verification status
router.get(`/:token`, async (req, res) =>
{
    try
    {
        const user = jwt.verify(req.params.token, EMAIL_SECRET);
       // const username = await user.username;
        const email = user

        let updateSql = `UPDATE simptab SET verified = '1' WHERE username = '${email}'`;
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