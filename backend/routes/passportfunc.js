// const express = require('express');

// const router = express.Router();
const LocalStrategy = require('passport-local').Strategy;

function runStartPass(passport)
{
    const authenticateUser = (email, password, done) =>
    {
        const user = getUserByEmail(email)
    };

    passport.use(new LocalStrategy({ username: 'email' }), authenticateUser);

    passport.serializeUser((user, done) => { });
    passport.deserializeUser((id, done) => { });
    
}












module.exports = runStartPass;
