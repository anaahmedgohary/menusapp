const express = require("express");
const router = express.Router();
const mysql = require('mysql2');
// encryption
const CryptoJS = require("crypto-js");






require('dotenv').config();
 const db = mysql.createConnection(process.env.DATABASE_URL);
//table menususerinfo

// local dev
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'pma',
//     password: '',
//     database: 'node24db' //table tester01 menususerinfo

// });

db.connect((err) =>
{
    if (err)
    {
        throw err;
    };    
});


// encryption
const secret_key = 'QfT2UQMIF4jaHilY2DNvXECSns0tctaI';
const dataunderEnc = CryptoJS.AES.encrypt(
    JSON.stringify('encryptedString'),
    secret_key
).toString();
router.get('/encrypto', (req, res) =>
{
    res.send(dataunderEnc);
   // res.json(dataunderEnc)
})

// get user saved info
router.post('/getinfo', async (req, res) =>
{

    try
    {
        let findSql = `SELECT * FROM menususerinfo`;
        let query = db.query(findSql, async (err, results) =>
        {

            if (err) console.log(err);
            let users = results;
            // oh wow () and {} do not work with find method
            const user = await users.find(user => user.email === req.body.email);
            if (user == null)
            {
                return res.sendStatus(401);
            }
            const encryptedUser = CryptoJS.AES.encrypt(
                JSON.stringify(user),
                secret_key).toString();
           // console.log(user);
           // console.log(user.name);
            return res.send(encryptedUser);

        });
    } catch (e)
    {
        console.log(e)
    }
});

router.post('/updateinfo', async (req, res) =>
{
    const { name, birthday, phone, city, restaurant, email } = await req.body;

    let findSql = `SELECT * FROM menususerinfo`;
    let query = db.query(findSql, async (err, results) =>
    {

        if (err) console.log(err);
        // oh wow () and {} do not work with find method
        const user = await results.find(user => user.email === req.body.email);

        if (user == null)
        {
            try
            {
                let sql = `INSERT INTO menususerinfo SET ?`
                let post = { name, birthday, phone, city, restaurant, email };
                let query = db.query(sql, post, (err, result) =>
                {
                    if (err) console.log(err);
                    return res.status(200).send('new info added!');
                })
            } catch (e)
            {
                console.log(e)
            }
        } else
        {
            try
            {
                let updateSQL = `UPDATE menususerinfo SET name='${name}', birthday='${birthday}', phone='${phone}', city='${city}', restaurant='${restaurant}' WHERE email='${email}'`;
                let query = db.query(updateSQL, (err, result) =>
                {
                    if (err) console.log(err);
                    return res.status(200).send('info was updated!');
                })
            } catch (e)
            {
                console.log(e);
            }
        }
    })

    
    
})






















module.exports = router;