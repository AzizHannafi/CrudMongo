const mongoose = require("mongoose");


const ProfilVaccinSchema = new mongoose.Schema({
  cheval: {
    type: String,
    required: [true, "Please provide cheval"],
  },
  vaccin: {
    type: String,
    required: [true, "Please provide vaccin"],

  },
nombre_dose_fait: {
  type: String,
  required: [true, "Please provide nombre"],

},
    date_prochaine_dose: {
    type: String,
    required: [true, "Please add a date"],
    
  },



});
const ProfilVaccin = mongoose.model("profilVaccin", ProfilVaccinSchema);

module.exports =  ProfilVaccin;