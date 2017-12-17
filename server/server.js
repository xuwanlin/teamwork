const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let session = require('express-session');

//跨域授权设置
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method.toUpperCase() === "OPTIONS") {
        res.end();
    } else {
        next();
    }
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({extended: false}));
app.use('/public', express.static('static'));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'vip',
    cookie: {
        httpOnly: false,
        maxAge: 1800000
    }
}));

let swipers = require('./mock/sliders');
//首页轮播图
app.get('/api/swipers', function (req, res) {
    res.send({code: 0, swipers});
});


app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});