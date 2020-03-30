const models=require('../../models');

async function getActivity(req,res,next){
try{    
        const user=await models.Activity.findAll({
            where:{
                email:req.params.user
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


module.exports={getActivity};

