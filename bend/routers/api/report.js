const models=require('../../models');
const moment=require('moment')
async function getReport(req,res,next){
try{    let user1=[];
        const user=await models.Activity.findAll({
            where:{
                email:req.params.user,
                
                
            }
        })
        
        user.map((item,key)=>{
            if(moment(item.date).format('L')<=moment(new Date()).format('L')&&
            moment(item.date).format('L')>=moment(moment().subtract(6, 'days')).format('L')
             && item.end_Time!==null)
            {user1.push({email:item.email,date:item.date,activity:item.activity,
            start_Time:item.start_Time,
        end_Time:item.end_Time})}
        })
        res.status(200).json({
            user1
        })
        
}
catch(err)
{
    next(err);
    
}

}


module.exports={getReport};

