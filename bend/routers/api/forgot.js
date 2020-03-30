const models=require('../../models');

async function forgot(req,res,next){
try{    
        const user=await models.User.update({password:req.body.password},{
            where:{
                email:req.body.email,

            }
        })
        
        res.status(200).json({
            user
        })
}
catch(err)
{
    next(err);
    
}

}


module.exports={forgot};

