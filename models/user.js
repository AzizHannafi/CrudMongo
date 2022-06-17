
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    Firstname: {
      type: String,
      required: [true, "donnez votre nom"],
    },
  
    Lastname: {
      type: String,
      required: [true, "donnez votre prénom"],
    },
  
    email: {
      type: String,
      required: [true, "donnez votre email "],
      unique: true,
      match: [
        /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "donnez votre  mot de passe"],
      length: 8,
      select: false,
    },
  
    CIN: {
      type: String,
      required: [true, "donnez votre CIN"],
      minlength: 8,
      maxlength: 8,
      unique : true
    },
  
    Adresse: {
      type: String,
      required: [true, "donnez votre  Adresse"],
    },
  
    Postalcode: {
      type: String,
      required: [true, "donnez code postale"],
      minlength: 4,
      maxlength: 4,
    },
    Civilstate: {
      type: String,
      required: [true, "donnez votre état civile"],
    },
  
    Birthdate: {
      type: Date,
  
      required: true
  },
  
  Phonenumber: {
    type: String,
    required: [true, "donnez votre numéro"],
    minlength: 8,
    maxlength: 8,
  },
  
 

  });

  const User= mongoose.model("users", UserSchema);

module.exports = User;