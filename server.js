const express = require("express");
const app = express();
const cors = require('cors');
const connectDB = require("./config/db");

const ChevalController = require('./controllers/ChevalController')
const vaccinController = require('./controllers/VaccinController')
const ProfileVaccinController = require('./controllers/ProfileVaccinController')
const UserController = require('./controllers/UserController')

app.use(cors());
connectDB()
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Api running");
});

app.use('/Chevals',ChevalController)
app.use('/Vaccin',vaccinController)
app.use('/ProfileVaccin',ProfileVaccinController)
app.use('/User',UserController)


 app.listen(8080, () =>
 
  console.log(`Server running on port 8080`)
);