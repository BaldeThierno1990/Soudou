const mongoose = require("mongoose");

const thingSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  price: { type: Number },
  tel: { type: String },
  email:{type:String},
  address:{type:String},
  cp:{type:String},
  ville:{type:String}

  
});

module.exports = mongoose.model("Thing", thingSchema);
