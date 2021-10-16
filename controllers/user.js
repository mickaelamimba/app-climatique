const encryptPassword = require("../utils/encryptPassword");
const decryptPassword = require("../utils/decryptPassword");
const userGet =async(req,res)=>{
    try{
        const User = req.app.get('models').User
        const allUsers = await User.find()
        res.json(allUsers)
    }catch(e){
return res.json(e.message)
    }
}
const userCreat = async(req,res)=>{

    try{
        if (!req.body.password){
            res.json('no password')
        }
        if(req.role !== 'Administrateur'){
            res.json('Unauthorized')
        }
        const {token,salt,hash} = encryptPassword(req.body.password)
        const User = req.app.get('models').User
        const NewUser = await new User({
            name :req.body.name,
            address: req.body.address,
            city:req.body.city,
            phoneNumber: req.body.phoneNumber,
            role:req.body.role,
            token,
            salt,
            hash,
            userName:req.body.userName
        }).save()
        res.json(NewUser)
    }catch(e){

    }
}
const userDelete =async(req,res)=>{
    try{
        if (!req.body._id){
            return  res.json('id not found')
        }
        if(req.role !== 'Administrateur'){
            res.json('Unauthorized')
        }
        const User = req.app.get('models').User
        const toDeleteUser = await User.findById(req.body._id)
        await toDeleteUser.remove()
        res.json("successfully delete")
    }catch(e){
        return res.json(e.message)
    }
}
const userUpdate = async(req,res)=>{
    try{
        if (!req.body._id || !req.body.toModify){
            return  res.json('id not found')
        }
        const User = req.app.get('models').User
        const toModifyUser = await User.findById(req.body._id)
        const toModifyKeys = Object.keys(req.body.toModify)
        for (const key of toModifyKeys) {
            toModifyUser[key] = req.body.toModify[key]
        }
        await toModifyUser.save()

        res.json("successfully delete")
    }catch(e){
        return res.json(e.message)
    }
}
const userLogin = async(req,res)=>{
    try{
        if (!req.body.userName ||!req.body.password){
            res.json('id or password missing')
        }
        const User = req.app.get('models').User
        const topVerifyUser = await User.findOne({userName: req.body.userName})
        if(!topVerifyUser){
            return res.json('No user found')
        }
        res.json(decryptPassword(topVerifyUser, req.body.password))

    }catch (e) {
        res.json(e.message)
    }
}

module.exports = {userCreat,userGet,userUpdate,userDelete,userLogin}