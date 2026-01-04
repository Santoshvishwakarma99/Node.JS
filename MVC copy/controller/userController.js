const passport = require('passport');
const usermodel=require('../model/usermodel');
const nodemailer = require('nodemailer');
const jwt=require('jsonwebtoken');

const Showregister=(req,res)=>{
    res.render("register")
}
const Showlogin=(req,res)=>{
    res.render("login")
}   
const Register=async(req,res)=>{
    const data=await usermodel.create(req.body);
    res.send(data);
}

// const login = async (req, res) => {
//     const { username, password } = req.body;

//     // check username exist
//     const user = await usermodel.findOne({ username , password });

//    if(!user){
//     return res.send("user not found")
//    }
// res.cookie("user",user._id).send("login successful")

// };



// jwt

const login = async (req, res) => {
    const { username, password } = req.body;

    // check username exist
    const user = await usermodel.findOne({ username , password });

   if(!user){
    return res.send("user not found")
   }
   if(user.password !== password){
    return res.send("password not match")
   }
   if(user && user.password === password)
   {
    let payload={
        username:user.username,
        password:user.password,
        id:user.id
    }
    let token=jwt.sign(payload,"private-key");
    console.log(token)
    return res.cookie("token",token ).send("login in")
   }

};

const local=(req,res)=>{
   return res.send(" login local successful")
}

// forget passport

const password=async(req,res)=>{
    const{id}=req.params;
    let{newpassword}=req.body;
    const data=await usermodel.findByIdAndUpdate(id,{password:newpassword});
    res.send("update password",data);
}

let otp = Math.floor(Math.random() * 10000);
const mail=(req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "sv381739@gmail.com",
            pass: "scalwnpapyhphlzx",
        },
    });

    const mailOptions = {
        from: "sv381739@gmail.com",
        to: req.body.email,
        subject: 'Password change',
        html: `<p>${otp}</p>`,
    };

    transporter.sendMail(mailOptions,(err, data) =>{
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
        res.send("mail sent successfully");
    });
}



const verifyToken=(req,res)=>{
    // console.log(req.headers.authorization)
    let token=req.headers.authorization.split(" ")[1];
    let decoded=jwt.verify(token,"private-key");
    return res.send(decoded);
}


const getAllUsers=async(req,res)=>{
    const data=await usermodel.find();
    res.send(data);
}

const deleteUser=async(req,res)=>{
    const id=req.params.id;
    const data=await usermodel.findByIdAndDelete({_id:req.params.id});
    res.send(data);
}

const updateUser=async(req,res)=>{
    const id=req.params.id;
    const data=await usermodel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
    res.send(data);
}

module.exports={Register,login, getAllUsers, deleteUser, updateUser,Showlogin,Showregister,local,password,mail,verifyToken};