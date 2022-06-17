const Vaccin = require('../models/Vaccin')
const express= require("express");

const router= express.Router();


router.use(express.json());

router.get("/GetAll", (req, res)=>{
    Vaccin.find({},(err, result)=>{
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
    const vaccin = await Vaccin.findById(id);
  res.status(200).json({ message: "Operation Succeded", vaccin });
} catch (err) {
  res.status(404).json({
    message: "No Data Found with this Id.",
  });
  throw err;}

})

router.post("/AddVaccin", async(req,res)=>{
    try {
        var vaccin = new Vaccin({
          nom: req.body.nom,
          nombre_des_doses: req.body.nombre_des_doses,
          duree: req.body.duree,
        });
        const newVaccin = await vaccin.save();
        res.status(201).json({ message: "Operation Succeded", newVaccin });
      } catch (err) {
        res.status(500);
        throw err;
      }
 
})

router.patch('/UpdateVaccin/:id', async (req,res)=>{
    try {
        var vaccin = {
            nom: req.body.nom,
            nombre_des_doses: req.body.nombre_des_doses,
            duree: req.body.duree,
        };
    
        const updatedVaccin = await Vaccin.findByIdAndUpdate(
          req.params.id,
          { $set: vaccin },
          { new: true }
        );
        res.status(200).json({ message: "Operation Succeded", updatedVaccin });
      } catch (err) {
        res.status(304).json({ message: "Operation to Update Failed." });
        throw err;
      }
})



router.delete('/DeleteVaccin/:id', async (req,res)=>{
    const id = req.params.id;
    try {
      const deletedVaccin = await Vaccin.findByIdAndRemove(id);
      res.status(200).json({ message: "Operation Succeded", deletedVaccin });
    } catch (err) {
      res.status(500).json({ message: "No Data to Delete." });
      throw err;
    }
})


module.exports= router;
