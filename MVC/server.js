const express = require('express');
const db = require('./config/db');
const route= require("./routes/userRoute");
const productRoute= require("./routes/productRoute");
const categoryRoute= require("./routes/categoryRoute");
const app = express();

app.use(express.json());

app.use('/product', productRoute);
app.use('/user', route);
app.use('/category', categoryRoute);
   
app.listen(7000, () => {
    console.log("Server is running on port 3000");
});