const ProfilVaccin = require('../models/ProfileVaccin')
const express= require("express");

const router= express.Router();


router.use(express.json());

router.get("/GetAll", (req, res)=>{
    ProfilVaccin.find({},(err, result)=>{
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
    const profilVaccin = await ProfilVaccin.findById(id);
  res.status(200).json({ message: "Operation Succeded", profilVaccin });
} catch (err) {
  res.status(404).json({
    message: "No Data Found with this Id.",
  });
  throw err;}



})


router.post("/AddProfileVaccin", async(req,res)=>{
    try {
        var profilevaccin = new ProfilVaccin({
            cheval: req.body.cheval,
            vaccin: req.body.vaccin,
            nombre_dose_fait: req.body.nombre_dose_fait,
            date_prochaine_dose: req.body.date_prochaine_dose,
        });
        const newProfileVaccin = await profilevaccin.save();
        res.status(201).json({ message: "Operation Succeded", newProfileVaccin });
      } catch (err) {
        res.status(500);
        throw err;
      }
 
})

router.patch('/UpdateProfileVaccin/:id', async (req,res)=>{
    try {
        var profilevaccin = {
            cheval: req.body.cheval,
            vaccin: req.body.vaccin,
            nombre_dose_fait: req.body.nombre_dose_fait,
            date_prochaine_dose: req.body.date_prochaine_dose,
        };
    
        const updatedProfileVaccin = await ProfilVaccin.findByIdAndUpdate(
          req.params.id,
          { $set: profilevaccin },
          { new: true }
        );
        res.status(200).json({ message: "Operation Succeded", updatedProfileVaccin });
      } catch (err) {
        res.status(304).json({ message: "Operation to Update Failed." });
        throw err;
      }
})

router.delete('/DeleteProfileVaccin/:id', async (req,res)=>{
    const id = req.params.id;
    try {
      const deletedProfileVaccin = await ProfilVaccin.findByIdAndRemove(id);
      res.status(200).json({ message: "Operation Succeded", deletedProfileVaccin });
    } catch (err) {
      res.status(500).json({ message: "No Data to Delete." });
      throw err;
    }
})


module.exports= router;