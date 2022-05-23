// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];
  const mongoose = require("mongoose");

const Drone = require("../models/Drone.model");

// this is the file where we establish connection with database
require("../db/index.js");

Drone.create(drones)
.then(dronesFromDB => { // all went good

   dronesFromDB.forEach(oneDrone => {
        console.log(oneDrone.name);
    });

    mongoose.connection.close();
}) 
.catch(err => console.log(`Error while seeding the database: ${err}`)) // something bad happened
  