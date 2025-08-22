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
    res.status(200).send({message:req.body});
    
   }
   catch(error){
   res.status(400).json("internal server error");
   }


}

module.exports={home,register};
