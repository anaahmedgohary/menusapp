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
        //X--X const url = `https://menusapp.vercel.app/confirmationemail/${confirmationToken}`;
        // damn it was that obvious & still didn't see it https://menusappback.vercel.app
        const url = `https://menusappback.vercel.app/confirmationemail/${confirmationToken}`;
        // local
       // const url = `http://localhost:4000/confirmationemail/${confirmationToken}`;

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
            // response.setHeader(name, value)
           // res.setHeader('authorization', `Bearer ${confirmationToken}`)
        })


    } catch {
        res.status(500).send("Error Sending Email")
    }
    
})


// change user verification status


router.get('/:token' , async (req, res) =>
{
    // from ben-awad
   // const token = req.headers['x-token'];  

    // from kyle
   // let username = req.username

    try
    {
        const user = jwt.verify(req.params.token, EMAIL_SECRET);
       // const username = await user.username;
        const email = user
       // console.log(email);

        let updateSql = `UPDATE simptab SET verified = '1' WHERE username = '${email}'`; // tester01 simptab
        let query = db.query(updateSql, async (err, results) =>
        {
            if (err) throw err;
            console.log('Updated Verification Status');
            res.redirect('https://menusapp.vercel.app/login/');
        });

        // res.redirect('http://exmple.com'+req.url)
       // res.status(200).send('Updated Verification Status');
       // res.status(200).redirect('https://menusapp.vercel.app/login')
      //  console.log('Updated Verification Status 2');
       // res.redirect('https://menusapp.vercel.app/login/');
    } catch {
        res.status(500).send('failed to verify!');
    }
})

// from kyle
function authenticateToken(req, res, next)
{  
    const authHeader = req.headers['authorization']; // Bearer TOKEN
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (token == null) return res.status(401).send();

    jwt.verify(token, EMAIL_SECRET, (err, username) =>
    {
        if (err) return res.status(403).send();
        req.username = username;
        next()
    })

}













module.exports = router;