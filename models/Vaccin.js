const mongoose = require("mongoose");


const VaccinSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, "Please provide nom"],
  },
  nombre_des_doses: {
    type:String ,
    required: [true, "Please provide a number"],

  },
     duree: {
    type: String,
    required: [true, "Please add a duree"],
  }
}
)
const Vaccin= mongoose.model("Vaccin", VaccinSchema);

module.exports = Vaccin;