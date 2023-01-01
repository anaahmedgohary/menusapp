const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');



function sendWelcomeEmail(email)
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
            to: email,
            subject: 'Welcome Email',
            text: `Thank you ${email} and welcome to city menus app.`
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
}

router.post('/welcome', async (req, res) =>
{
    const body = req.body;
    let username = body.username;

    sendWelcomeEmail(username)
        .then(response => res.send(response.message))
        .catch(error => res.status(500).send(error.message))
});


function newLoginAlert(email)
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
            to: email,
            subject: 'Login Alert',
            text: `Dear ${email}, we'd like to alert you that there's been a new login to your account.`
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
}

router.post('/loginalert', async (req, res) =>
{
    const body = req.body;
    let username = body.username;

    newLoginAlert(username)
        .then(response => res.send(response.message))
        .catch(error => res.status(500).send(error.message))
});


// Recover forgotten Password
function recoverpassword(email)
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
            to: email,
            subject: 'Password Recovery',
            text: `Thank you ${email} and welcome to city menus app.`
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
}












module.exports = router;