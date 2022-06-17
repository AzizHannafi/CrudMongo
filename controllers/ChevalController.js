const Cheval = require('../models/Cheval')
const express= require("express");

const router= express.Router();


router.use(express.json());

router.get("/GetAll", (req, res)=>{
    Cheval.find({},(err, result)=>{
        if(err){
            console.log(err);
            res.json(result);
        }else{
            console.log(result);
            res.json(result);
        }
    })
})


router.get("/GetById/:id", async(req, res) =>{
    const id = req.params.id;
    try {
    const cheval = await Cheval.findById(id);
  res.status(200).json({ message: "Operation Succeded", cheval });
} catch (err) {
  res.status(404).json({
    message: "No Data Found with this Id.",
  });
  throw err;}

})

router.patch('/UpdateCheval/:id', async (req,res)=>{
    try {
        var cheval = {
            nom: req.body.nom,
            race: req.body.race,
            numero_de_serie: req.body.numero_de_serie,
            date_de_naissance: req.body.date_de_naissance,
            sexe: req.body.sexe,
            taille: req.body.taille,
            poids: req.body.poids,
            etat: req.body.etat,
            description: req.body.description,
            date_de_mesure: req.body.date_de_mesure,
        };
    
        const updatedCheval = await Cheval.findByIdAndUpdate(
          req.params.id,
          { $set: cheval },
          { new: true }
        );
        res.status(200).json({ message: "Operation Succeded", updatedCheval });
      } catch (err) {
        res.status(304).json({ message: "Operation to Update Failed." });
        throw err;
      }
})

  
router.post("/AddCheval", async(req,res)=>{
    try {
        var cheval = new Cheval({
          nom: req.body.nom,
          race: req.body.race,
          numero_de_serie: req.body.numero_de_serie,
          date_de_naissance: req.body.date_de_naissance,
          sexe: req.body.sexe,
          taille: req.body.taille,
          poids: req.body.poids,
          etat: req.body.etat,
          description: req.body.description,
          date_de_mesure: req.body.date_de_mesure,
        });
        const newCheval = await cheval.save();
        res.status(201).json({ message: "Operation Succeded", newCheval });
      } catch (err) {
        res.status(500);
        throw err;
      }
 
})


router.delete('/DeleteCheval/:id', async (req,res)=>{
    const id = req.params.id;
    try {
      const deletedCheval = await Cheval.findByIdAndRemove(id);
      res.status(200).json({ message: "Operation Succeded", deletedCheval });
    } catch (err) {
      res.status(500).json({ message: "No Data to Delete." });
      throw err;
    }
})


module.exports= router;
