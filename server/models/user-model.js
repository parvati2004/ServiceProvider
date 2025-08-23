const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,

    },
     email:{
        type:String,
        require:true,

    },
     phone:{
        type:String,
        require:true,

    },
     password:{
        type:String,
        require:true,

    },
     isAdmin:{
        type:Boolean,
        default:false

    }


});

//?secure the password with the bcrypt
//pre function data save hone se pahle async function chalayaga
userSchema.pre("save",async function(next){
console.log("pre method",this) ;  
const user=this;
//if password modify nahi huva he already hame bcrypt kar chuke he but if the password is creating first time then next round try catch see 
if(!user.isModified('password'))
{
    next();

}
try{
    const saltRound=await bcrypt.genSalt(10);
     const hash_password=await bcrypt.hash(user.password,saltRound);
     user.password=hash_password;


}
catch(error)
{
    next(error)
}

});
//compare the password
userSchema.methods.comparePassword= async function(password)
{
    return await bcrypt.compare(password,this.password);
}

//json web token
userSchema.methods.generateToken=async function(){
   try{

    return jwt.sign({
        userId:this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin,
    },
    process.env.JWT_SECRETE_KEY,{
        expiresIn:"90d"
    }
);
   } 
   catch(error)
   {
    console.error(error);
   }

}

const User=new mongoose.model("User",userSchema);
module.exports=User;
//define the model or the collection name