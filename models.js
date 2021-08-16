const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Excercise = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number, 
    reps: Number,
    sets: Number,
    distance: Number
});

const Workout = new Schema({
    day: {
        type: Date, 
        default: Date.now,
        required: true
    },
    exercise: [Excercise]
});

const Workout = mongoose.model("Workout", Workout);

module.exports = Workout;
    
