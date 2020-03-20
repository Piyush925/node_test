const models=require('../../models');

async function addActivity(req,res,next)
{
    
    try{

    const user=models.Activity.create(req.body)
    res.status(200).json({
        user
    })
    }
    catch(err){
        next(err)
    }

}
module.exports={addActivity};