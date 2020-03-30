const models=require('../../models')

async function signin (req, res, next) {
    try {
        const user = await models.User.findOne({
            where:{
                email:req.body.email,
                password:req.body.password
            }
        })
        if(!user)
        {
            res.status(500).json({
                message:"Please enter valid password or email"
            })
        }
        else{
           // localStorage.setItem(req.body.email,req.body)
        res.status(200).json({
            user
        })}

    } catch (error) {
        res.status(404),json({error})
    }
}

module.exports =  {signin};