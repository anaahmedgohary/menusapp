//import React from 'react'



export default function ConnPlanetScale()
{
    
    require('dotenv').config();
    const mysql = require('mysql2');
    const connection = mysql.createConnection(process.env.DATABASE_URL);
    console.log('Connected to PlanetScale!');
    connection.end();

  
}

let mysql;

const db = mysql.createConnection({
    host: 'us-east.connect.psdb.cloud',
    user: 'd1q35zdh6g7m5eslvnal',
    password: 'pscale_pw_r3G6ixIaiwDhbaD8rSNvH84o2hsA5CNJleHuEBl8XmU',
    database: 'fooddelivery'
});

db.connect((err) =>
{
    if (err)
    {
        throw err;
    };
    console.log("db conn 24")

});