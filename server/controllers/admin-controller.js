
const User=require("../models/user-model");
const Contact=require("../models/contact-model");
const getAllUsers=async(req,res)=>{
    try{
        //means  show all the users field exculude the password there no password field
        const users=await User.find({},{password:0});
        console.log(users);
        if(!users || users.length===0)
        {
            return  res.status(404).json({message:"No Users Found"});

        }
       return res.status(200).json(users);

    }
    catch(error)
    {
       next(error) 
    }

};
//Get All contacts
const getAllContacts=async(req,res)=>{
    try{
        const contacts=await Contact.find();
        //console.log(contacts)
        if(!contacts || contacts.length===0)
        {
            return  res.status(404).json({message:"No Contacts Found"});

        }
        return res.status(200).json(contacts);

    }
    catch(error){
        next(error);

    }

}
module.exports={getAllUsers,getAllContacts};