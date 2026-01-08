const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const router = express.Router();


router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await  User.create ({
    name,
    email,
    password: hashedPassword,
  });

 return res.send(user)
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });


  let payload={
    email,password
  }
  const token = jwt.sign(payload, "SECRETKEY");
  res.json({ token, user });
});



router.post("/verify",async(req,res)=>{

  
  let token=req.headers.authorization.split(' ')[1];
  let decoded=jwt.verify(token,'SECRETKEY')
  return res.send(decoded)
})

module.exports = router;