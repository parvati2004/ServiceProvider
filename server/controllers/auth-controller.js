const User = require("../models/user-model");
const bcrypt=require("bcryptjs");
const home=async(req,res)=>{
    try{
         res.status(200).send("Welcome parvati saud");

    }
    catch(error)
    {
        console.log(error);
    }

};

const register=async(req,res)=>{
 try{
    console.log(req.body);
    //step 1: get registration data
    const {username,email,phone,password}=req.body;

    //step 2:check email existence
    const userExist=await User.findOne({email});
    if(userExist)
    {
        return res.status(400).json({msg:"email already exist"});
    }
    //hash the password
    // const saltRound=10;
    // const hash_password=await bcrypt.hash(password,saltRound);

    const userCreated=await User.create({username,email,phone,password});

    res.status(201).json({msg:"registration successfull",
    token:await userCreated.generateToken(),
    userId:userCreated._id.toString(),
});
    
   }
   catch(error){
//    res.status(500).json("internal server error");
  next(error);
   }


};

//User login logic

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const userExist=await User.findOne({email});
        console.log(userExist)
        if(!userExist)
        {
            return res.status(400).json({message:"Invalid Credential"});
        }
        //const user=await bcrypt.compare(password,userExist.password); or
        const user=await userExist.comparePassword(password);
        if(user){
             
        res.status(200).json({
        msg:"Login Successfull",
         token:await userExist.generateToken(),
       userId: userExist._id.toString()
    });

        }
        else{
            res.status(401).json({message:"Invalid email or password"})
        }

    }
    catch(error)
    {
         res.status(500).json("internal server error");
       
    }

}

module.exports={home,register,login};
