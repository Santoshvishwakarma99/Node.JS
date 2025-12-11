const usermodel=require('../model/usermodel');

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

const login = async (req, res) => {
    const { username, password } = req.body;

    // check username exist
    const user = await usermodel.findOne({ username , password });

   if(!user){
    return res.send("user not found")
   }
res.cookie("user",user._id).send("login successful")

};

const local=(req,res)=>{
   return res.send(" login local successful")
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

module.exports={Register,login, getAllUsers, deleteUser, updateUser,Showlogin,Showregister,local};