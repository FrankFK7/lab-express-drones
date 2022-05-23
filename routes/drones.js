const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

Drone.find()
.then(allDronesFromDB => {
   
    res.render("../views/drones/list.hbs", {
        allDronesFromDB,
        numberOfDrones: allDronesFromDB.length
    });
})
.catch(err => console.log("An error occurred while getting all othe drones from DB: ", err));
});


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("../drones/index.js/drones.list.hbs")
  router.post("/drone/new", (req, res) => {
    console.log("this is what user added: ", req.body);

    const { name, propellers, speed} = req.body;
    Drone.create({ name, propellers, speed})
    .then(newDroneFromDB =>{
      console.log("this is new drone: ", newSavedDroneFromDB);

    })

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
