const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
   options:[
       {type:mongoose.Schema.Types.ObjectId, ref:'Room',required: false},
      {registerDate: {type: Date,required: false}}
   ],
   user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},

})
const Customer = mongoose.model("Customer",CustomerSchema)

module.exports = Customer