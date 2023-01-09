const express = require("express");
const router = express.Router();

const mysql = require('mysql2');

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


// get user saved info
router.post('/getinfo', async (req, res) =>
{
    const email = req.body.email;

    try
    {

        let findSql = `SELECT * FROM menususerinfo`;
        db.query(findSql, async (err, results) =>
        {

            if (err) console.log(err);
            const user = await results.find((user) => { user.email = req.body.email });
            console.log(user);
            res.send(user);
        })
        
    } catch (e)
    {
        console.log(e)
    }
});

router.post('/updateinfo', async (req, res) =>
{
    const { name, birthday, phone, city, restaurant, email } = await req.body;

    let findSql = `SELECT * FROM menususerinfo`;
    db.query(findSql, async (err, results) =>
    {

        if (err) console.log(err);
        const user = await results.find((user) => { user.email = req.body.email });

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
                let updateSQL = `UPDATE menususerinfo SET name=${name}, birthday=${birthday}, phone=${phone}, city=${city}, restaurant=${restaurant} WHERE email=${email}`;
                let query = db.query(updateSQL, (err, result) =>
                {
                    if (err) console.log(err);
                    return res.status(200).send('info was updated!');
                })
            } catch (e)
            {
                console.log(e)
            }
        }
    })

    
    
})






















module.exports = router;