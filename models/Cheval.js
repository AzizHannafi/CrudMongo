const mongoose = require("mongoose");


const ChevalSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, "Please provide nom"],
  },
  race: {
    type: String,
    required: [true, "Please provide race"],

  },
     numero_de_serie: {
    type: String,
    required: [true, "Please add a numero_de_serie"],
    unique:true,
  },

  date_de_naissance: {
    type: String,
    required: [true, "Please provide date"],

  },

  sexe: {
    type: String,
    required: [true, "Please provide sexe"],
  },

  taille: {
    type: String,
    required: [true, "Please provide taille"],
  },

  poids: {
    type: String,
    required: [true, "Please provide poids"],
  },

  etat: {
    type: String,
    required: [true, "Please provide etat"],
  },

 description: {
    type: String,
    required: [true, "Please provide description"],
  },

  date_de_mesure: {
    type: String,
    required: [true, "Please provide date"],

  },

});
const Cheval = mongoose.model("Cheval", ChevalSchema);

module.exports = Cheval;