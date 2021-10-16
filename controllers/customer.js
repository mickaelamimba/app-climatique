const encryptPassword = require("../utils/encryptPassword");
const {token} = require("morgan");

const customerGet =async(req,res)=>{
    try{
        let allCustomer
        const Customer = req.app.get('models').Customer
        if(req.query.token){
            const models = req.app.get('models')
            allCustomer =await models.User.find({token: req.query.token,
            })

        }else{
            allCustomer = await Customer.find().populate('user')
        }

        res.json(allCustomer)
    }catch(e){
        res.json(e.message)

    }
}
const customerCreat = async(req,res)=>{

        if (!req.body.password){
            res.json('no password')
        }
        if(req.role !== 'Administrateur'){
            res.json('Unauthorized')
        }
        const models = req.app.get('models')
        const {token,salt,hash} = encryptPassword(req.body.password)
        const NewUser = await new models.User({
            name :req.body.name,
            address: req.body.address,
            city:req.body.city,
            phoneNumber: req.body.phoneNumber,
            token,
            hash,
            salt,
            role:req.body.role,
            userName:req.body.userName
        }).save()
        const newCustomer = await new models.Customer({
            user: NewUser._id,
            options: req.body.options}).save()
        return res.json(newCustomer)


}
const customerUpdate =async(req,res)=>{

    if(req.role !== 'Administrateur'){
        res.json('Unauthorized')
    }
    try{
        if (!req.body._id){
            res.json('No id provided')
        }

        const Customer = req.app.get('models').Customer
        let toModifyCustomer = await Customer.findById(req.body._id)
        if(!toModifyCustomer){
           res.json('Customer not found')
        }
        const toModifyKeys =Object.keys(req.body.toModify)
        for (const key of toModifyKeys) {
            toModifyCustomer[key]=req.body.toModify[key]
        }
        await toModifyCustomer.save()
        res.json(toModifyCustomer)
    }catch(e){
        return res.json(e.message)
    }
}
const customerDelete  = async(req,res)=>{
    if(req.role !== 'Administrateur'){
        res.json('Unauthorized')
    }
    if (!req.body._id){
        res.json('No id provided')
    }
    const models = req.app.get('models')
    const Customer = req.app.get('models').Customer
    let toDeleteCustomer = await Customer.findById(req.body._id)
    if(!toDeleteCustomer){
        return res.json('customer not found')
    }
    let toDeleteUser = await models.User.findById(toDeleteCustomer.user)
    await toDeleteUser.remove()
    await toDeleteCustomer.remove()
    res.json("Successfully deleted")
}

module.exports = {customerCreat,customerGet,customerUpdate,customerDelete}