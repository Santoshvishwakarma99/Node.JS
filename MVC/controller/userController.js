const usermodel=require('../model/usermodel');

const Register=async(req,res)=>{
    const data=await usermodel.create(req.body);
    res.send(data);
}

const login=async(req,res)=>{
    res.send("Login Sucessful");
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

module.exports={Register,login, getAllUsers, deleteUser, updateUser};