/* eslint-disable no-unused-vars */
const express = require("express");
// CORS Fix
const cors = require('cors');
const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const bcrypt = require('bcrypt');
// const passport = require('passport');

//console.log(process.env) // remove this after you've confirmed it is working
//console.log(process.env.SSL)



// const mysql = require('mysql');
// const mysql = require('mysql2');
// const { response } = require("express");

// require('dotenv').config();
// const db = mysql.createConnection(process.env.DATABASE_URL);

// console.log('Connected to PlanetScale!');
//db.end();

// db.connect((err) =>
// {
//     if (err){throw err;};
//     console.log('Connected to PlanetScale!');
//     //db.end();
// });


const loginHandler = require('./routes/loginhandler');
const signupHandler = require('./routes/signup');
const emailSender = require('./routes/emails');
const confirmationEmails = require('./routes/confirmationemail');
const resetPass = require('./routes/resetpassword');
const userInfo = require('./routes/userinfo')
// const passportFunc = require('./routes/passportfunc');
// const runStartPass = require('./routes/passportfunc');
// const product = require('./api/product');


// APPlication start
const app = express();
app.use(cors());  // CORS allow all Requests

const port = process.env.port || 4000; //

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/signup', signupHandler);
app.use('/emails', emailSender);
app.use('/login', loginHandler);
app.use('/confirmationemail', confirmationEmails);
app.use('/resetpass', resetPass);
app.use('/userinfo', userInfo);
//app.use('/recoverpass', recoverPass);
// runStartPass(passport);
 
// app.use("/api/product", product);




app.get("/", async (req, res) =>
{
   // res.send({ "users": ["a", "b", "c", "24"] })

    try
    {
        res.json({
            status: 200,
            message: "Get data is absolute success",
        });
        console.log("server connected!")
    } catch (err)
    {
        console.error(err);
        res.status(500).send("server error 246")
    }

})





app.listen(port, () =>
{
    console.log(`server started on port ${port}`)
})