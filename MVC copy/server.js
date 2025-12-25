const express = require('express');
const db = require('./config/db');
const route= require("./routes/userRoute");
const productRoute= require("./routes/productRoute");
const categoryRoute= require("./routes/categoryRoute");
const cookieParser=require("cookie-parser")
const session = require('express-session');
const passport = require('passport');
const LocalAuth = require('./middleware/LocalAuth');

const app = express();
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true}));
LocalAuth(passport);
app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());

app.use(express.urlencoded({extended: true}))
app.set("view engine","ejs")
app.use(cookieParser())
app.use('/product', productRoute);
app.use('/user', route);
app.use('/category', categoryRoute);

   
app.listen(7000, () => {
    console.log("Server is running on port 7000");
});