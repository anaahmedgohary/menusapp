/* eslint-disable no-unused-vars */
const express = require("express");
// CORS Fix
const cors = require('cors');
const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');


//console.log(process.env) // remove this after you've confirmed it is working
//console.log(process.env.SSL)

const loginHandler = require('./routes/loginhandler');
const signupHandler = require('./routes/signup');
const emailSender = require('./routes/emails');
// const product = require('./api/product');

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

// APPlication start
const app = express();
const port = process.env.port || 4000; //

// Requests handelers

app.use(cors());  // CORS allow all Requests
    // CORS Fix end

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/signup', signupHandler);
app.use('/emails', emailSender);
app.use('/login', loginHandler);
 
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
    } catch (error)
    {
        console.error(error);
        res.status(500).send("server error 246")
    }

})



// function sendWelcomeEmail(email)
// {
//     return new Promise((resolve, reject) =>
//     {
//         var transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'gogoahmed13@gmail.com',
//                 pass: 'ksgmffptgcaktzor'
//                 // app pass google 'ksgmffptgcaktzor'
//             }
//         });

//         const mail_configs = {
//             from: 'gogoahmed13@gmail.com',
//             to: email,
//             subject: 'Welcome Email',
//             text: 'Thank you and welcome to city menus app.'
//         };

//         transporter.sendMail(mail_configs, (error, info) =>
//         {
//             if (error)
//             {
//                 console.log(error)
//                 return reject({ message: `An error has happened!` })
//             }
//             return resolve({ message: `Email sent succesfuly!` })
//         });
//     })
// }

// app.post('/email/welcome', async (req, res) =>
// {
//     const body = req.body;
//     let username = body.username;

//     sendWelcomeEmail(username)
//         .then(response => res.send(response.message))
//         .catch(error => res.status(500).send(error.message))
// });

// app.post('/mylam/1', async (req, res) =>
// {
//    // res.json(req.body);
//     const body = req.body;
//     let username = body.username;
//     let password = body.password;
//     console.log(body);
//     let post = { username, password };
//     //let post = { username: "wow", password:"chaw"}
//     let sql = `INSERT INTO simptab SET ?`;

//     let query = db.query(sql, post, (err, result) =>
//     {
//         if (err) throw err;
//         //console.log(result);
        
//         res.send("signup success");
//         // res.sendFile(__dirname + '/public/thanks.html')
//     });

// })



// app.post('/passnewuser', async (req, res) =>
// {
//     try
//     {
//         const salt = await bcrypt.genSalt();
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);

//         const body = req.body;
//         let username = body.username;
//         let password = hashedPassword;
//         let post = { username, password };
//         let sql = `INSERT INTO simptab SET ?`;

//         let query = db.query(sql, post, (err, result) =>
//         {
//             if (err) throw err;
//             //console.log(result);
//             res.send("signup success");
//             // res.sendFile(__dirname + '/public/thanks.html')
//         });

//     } catch {
//         res.status(500).send('hashpassfailthen')
//     }
// })

// app.post('/newuser', async (req, res) =>
// {
//     try
//     {
//         const salt = await bcrypt.genSalt();
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);

//         const body = req.body;
//         let username = body.username;
//         let password = hashedPassword;
//         let post = { username, password };
//         let sql = `INSERT INTO simptab SET ?`;

//         let query = db.query(sql, post);
        
//         res.send("signup success");

//     } catch {
//         res.status(500).send('hashpassfailthen')
//     }
// })

// login auth
// app.post('/get/user', async (req, res) =>
// {

//     let sql = `SELECT * FROM simptab`;
//     let query = db.query(sql, async (err, results) =>
//     {
//         if (err) throw err;
//         console.log('got z results');

//         const users = results;
//         const user = await users.find(user => user.username = req.body.username);

//         if (user == null)
//         {
//             return res.status(400).send('cannot find user')
//         }

//         try
//         {
//             if (await bcrypt.compare(req.body.password, user.password))
//             {
//                 res.send('login is all good')
//                 console.log('got z user');
//             } else
//             {
//                 res.send('incorrect email or incorrect password')
//                 console.log('got nooo user');
//             }
//         } catch {
//             res.status(500).send('no userconn');
//         }

//     })
// })






app.listen(port, () =>
{
    console.log(`server started on port ${port}`)
})