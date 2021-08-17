const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Excercises = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number, 
    reps: Number,
    sets: Number,
    distance: Number
});

const Workouts = new Schema({
    day: {
        type: Date, 
        default: Date.now,
        required: true
    },
    exercise: [Excercises]
});

const Workout = mongoose.model("Workout", Workouts);

module.exports = Workout;
    
