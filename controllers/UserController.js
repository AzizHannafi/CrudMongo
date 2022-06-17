const User = require ('../models/user')
const express= require("express");

const router= express.Router();


router.use(express.json());

router.get("/GetAll", (req, res)=>{
    User.find({},(err, result)=>{
        if(err){
            console.log(err);
            res.json(result);
        }else{
            console.log(result);
            res.json(result);
        }
    })
})



router.delete('/DeleteUser/:id', async (req,res)=>{
    const id = req.params.id;
    try {
      const deletedUser = await User.findByIdAndRemove(id);
      res.status(200).json({ message: "Operation Succeded", deletedUser });
    } catch (err) {
      res.status(500).json({ message: "No Data to Delete." });
      throw err;
    }
})



module.exports= router;