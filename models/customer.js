const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
   options:[
       {officineRooms :{type: Number,required: false}},
      {registerDate: {type: Date,required: false}}
   ],
   user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},

})
const Customer = mongoose.model("Customer",CustomerSchema)

module.exports = Customer