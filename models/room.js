const mongoose = require("mongoose")
const RoomSchema = new  mongoose.Schema({
    name :{type: String},
    probe:[{type:mongoose.Schema.Types.ObjectId, ref:'Probe',default:[]}],
})

const Room = mongoose.model("Room",RoomSchema)
module.exports = Room