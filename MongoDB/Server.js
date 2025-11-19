const express=require("express")
const db=require("./config/db")
const usermodel = require("./model/usermodel.js")
const app=express()


app.set("view engine","ejs")
app.use(express.urlencoded())
app.use(express.json())

app.post("/insertData",async(req,res)=>{
    const data=await usermodel.create(req.body)
    res.send(data)
})


app.get("/",async(req,res)=>{
    const data=await usermodel.find({})
    return res.send(data)


    // res.render("Form")
})

app.listen(7000,()=>{
    console.log("Server listen");
})