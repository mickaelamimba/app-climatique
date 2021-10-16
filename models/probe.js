const mongoose = require("mongoose")
const ProbeSchema =  new  mongoose.Schema({
    uploadAt : {type: Date ,default: Date.now()},
    url : {type: String,required: true},
    probeType:{type: String},
    room :{type: String},
})

const Probe = mongoose.model("Probe",ProbeSchema)
module.exports = Probe