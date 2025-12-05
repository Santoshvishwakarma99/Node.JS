const isAuth=async(req,res,next)=>{
    const id=req.cookies.user
    if(id){
        next()
    }else{
      return  res.redirect("/user/register")
    }
}

module.exports=isAuth