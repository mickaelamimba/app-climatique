const mongoose = require("mongoose")
const UserSchema =  new  mongoose.Schema({
    name :{type: String, require: true},
    address: {type: String,require: true},
    city:{type: String,require: true},
    phoneNumber: {type: Number,require: true},
    token:{type: String,require: true},
    hash:{type:String,require: true},
    salt:{type:String,require: true},
    role:{type: String, default:'Officine'},
    userName:{type: String,require: true }
})
const User = mongoose.model("User",UserSchema)
module.exports = User