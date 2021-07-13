const Administrator=require('../models/administrator');
exports.createAdmin = async (req, res, next) => {
    try {
    let admin = await Administrator.create(req.body);
    
    const obj={
        message:'success',
      //  data:admin
    }
    res.status(201).json(obj);
    } catch (error) {
    return next(error);
    }
};

exports.getAdmin=async(req,res,next)=>{
    try{
        const obj={
            email:req.body.email,
            password:req.body.password
        }
        const login=await Administrator.findOne({email:obj.email,password:obj.password});
        const obj1={
            message:'success',
          //  data:login
        }
        if(login){
            res.status(201).json(obj1);
        }
        else{
            res.status(401).json({'message':'Either Email or password is incorrect'})
        }
    }
    catch(error){
        return next(error);
    }
}