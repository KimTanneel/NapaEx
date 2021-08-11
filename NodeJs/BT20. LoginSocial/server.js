require('dotenv').config();
const express = require('express')

const app = express()
const path = require('path');
const passport = require('passport')

const facebookStrategy = require('passport-facebook').Strategy

app.use(passport.initialize());
app.use(passport.session()); 

passport.use(new facebookStrategy({

    clientID        : process.env.APP_ID_FB,
    clientSecret    : process.env.TOKEN_SECRET_FB,
    callbackURL     : "http://localhost:3000/facebook/secrets",
    profileFields   : ['id','name','gender','picture.type(large)','email']

},// facebook send token and profile
function(token, refreshToken, profile, done) {
    // save profile DB
    console.log(profile)
    return done(null,profile)
}));



app.get('/account',(req,res) => {
    res.send("Account You Are Here");
    // write profile in DB
})

app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email,user_photos' }));
// url sign up in fb developer
app.get('/facebook/secrets',
        passport.authenticate('facebook', {
            successRedirect : '/account',
            failureRedirect : '/'
        }));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+'/views/login.html'));
})
passport.serializeUser(function(user, done) {
    done(null, user);
});


passport.deserializeUser(function(id, done) {
    return done(null,user)
});
app.listen(3000,() => {
    console.log("App is listening on Port 3000")
})