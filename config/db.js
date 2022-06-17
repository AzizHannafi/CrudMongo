const mongoose = require("mongoose");

const connectDB = async() => { mongoose.connect("mongodb+srv://zakariaoues:14032000@leshabitsrouges.qikev.mongodb.net/node_auth?retryWrites=true&w=majority",
 (error,response ) => {
  if(error){
    console.log("database connection error", error);
  } else 
    console.log("connection succeeded")
  
})
}


module.exports = connectDB;
