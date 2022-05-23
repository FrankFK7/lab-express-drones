// Iteration #1
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  {
    // title: {type: String, unique: true},
    name: String,
    propellers: Number,
    maxSpeed: Number
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true
  }
);

// instead of typing mongoose.model(), we can just say model() beacuse we destructured "model"
// variable in line 4
const Drone = model("Drone", droneSchema);
module.exports = Drone;

// a single line that does the same as the 2 lines above
// module.exports = model("drone", droneSchema);

// drones --> collection --> always lowercase and plural
// drone --> model --> always uppercase and singular