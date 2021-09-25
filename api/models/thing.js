const mongoose = require("mongoose");

const thingSchema = mongoose.Schema({
  image: { 
    type: String 
  },
  name: { 
    type: String
   },
 statut: { 
    type: String 
  },
  description: { 
    
    type: String
  
  },
  pays: { 
    type:String
  },
  ville:{
    type: String
  },
  phone:{
    type:String
  },
  mail:{
    type:String
  },
  

 
});

module.exports = mongoose.model("Thing", thingSchema);
