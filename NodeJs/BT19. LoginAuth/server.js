require('dotenv').config()  
const bcrypt = require('bcrypt')
const express = require('express')
const app = express();
const jwt = require('jsonwebtoken')

app.use(express.json());
// Store in DB
const accounts = [{
    username: 'Phan',
    password: '$2b$10$p6DjTGg6MCRj8QVvfu7LO.HwRMD5ruNpuBLw1RcuGUkFU6IdBvnTa'
}]
const posts = [{
        username: 'Tan',
        title: 'Post 1'
    },
    {
        username: 'Phan',
        title: 'Post 2'
    }
]
app.post('/signup', (req, res) => {
    const user = req.body.username
    const pass = req.body.password
    bcrypt.hash(pass, 10, function (err, hash) {
        // Store hash in your password DB.
        // Copy past in accounts
        // console.log(hash);
        console.log
        res.sendStatus(200);
    });
})
// Get new Token
app.post('/token', (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
        console.log("Token not exist");
        res.sendStatus(401);
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log("Token is invalid!")
        }
        const newToken = createNewToken({name:user.name});
        res.send({
            token: newToken
        });
    })
})
// Login 
app.post('/login', authenticate, (req, res) => {
    //Authentication
    const username = req.body.username
    const pass = req.body.username
    const user = { 
        name: username
    }
    const accessToken = createNewToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    res.json({
        accessToken: accessToken,
        refreshToken: refreshToken
    });

})

app.get('/posts', authenticationToken, (req, res) => {
    console.log(req.user.name);
    res.json(posts.filter(post => post.username === req.user.name))
})

function authenticate(req, res, next) {
    const username = req.body.username
    const password = req.body.password
    const userAccount = accounts.find(account => account.username == username);
    if (!userAccount) {
        console.log("Fail Username");
        res.sendStatus(401);
    }
    bcrypt.compare(password, userAccount.password, function (err, result) {
        // result == true
        if (!result) {
            console.log("fail pass")
            res.sendStatus(401);
        }
        next();
    });
    const pass = req.body.username
}

function authenticationToken(req, res, next) {
    console.log("Vao authen Token")
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            // Token Expired -> login
            console.log({err});
            if (error.message) {
            // Send Direct to Login page
                res.sendStatus(401);
            }
            return res.sendStatus(401)
        }
        console.log(user);
        req.user = user;
        console.log("Veryfi Token Success");
        next()
    })
}

function createNewToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 15
    });
}
app.listen(3000, () => {
    console.log("App run on Server Port 3000")
});