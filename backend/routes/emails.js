const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');



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
    let username = await body.username;

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

// password change request
router.post('/passchangereq', async (req, res) =>
{
    const body = req.body;
    let username = body.username;

    passChangeReq(username)
        .then(response => res.send(response.message))
        .catch(error => res.status(500).send(error.message))
});

function passChangeReq(email)
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
            subject: 'Password Change Request',
            text: `Dear ${email}. There was an attempt to change your password.`
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


// password was changed
router.post('/passwaschanged', async (req, res) =>
{
    const body = req.body;
    let username = body.username;

    passwordChanged(username)
        .then(response => res.send(response.message))
        .catch(error => res.status(500).send(error.message))
});

function passwordChanged(email)
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
            subject: 'Your Password Was Changed',
            text: `Dear ${email}. Your Password Was Changed Successfully.`
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


// confirmation email
const EMAIL_SECRET = 'ajsdklfjaskljgklasjoiquw01982310nlksas;sdlkfj';

router.post('/emailconfirmation', async (req, res) =>
{
    const body = req.body;
    let username = body.username;

    passwordChanged(username)
        .then(response => res.send(response.message))
        .catch(error => res.status(500).send(error.message))
});






module.exports = router;