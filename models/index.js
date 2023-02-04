// global includes // 
const User = require('./User');
const Exercises = require('../models/exercises');
const ScheduledExercises = require('../models/scheduledexercises'); 
const Musclegroup = require('../models/musclegroup'); 
const Muscle = require('../models/muscle'); 
const Favoriteexercises = require('../models/favoriteexercises');

// field relationships // 
User.hasMany(ScheduledExercises,{
    foreignKey: "user_id",
});

User.hasMany(Favoriteexercises,{
    foreignKey: "user_id",
});

Favoriteexercises.belongsTo(User, {
    foreignKey: "user_id",
});

Favoriteexercises.hasOne(Exercises, {
    foreignKey: "exercise_id",
});

ScheduledExercises.belongsTo(User, {
    foreignKey: "user_id",
});

Musclegroup.hasMany(Muscle, {
    foreignKey: "muscle_id",
    onDelete: 'CASCADE',
});
//added
Muscle.belongsTo(Musclegroup, {
    foreignKey: "muscle_id",
});

Musclegroup.hasMany(Exercises, {
    foreignKey: "musclegroup_id",
   onDelete: 'CASCADE',
});

Exercises.belongsTo(Musclegroup, {
    foreignKey: "musclegroup_id",
});

ScheduledExercises.hasMany(Exercises, {
    foreignKey: "exercise_id",
    sourceKey: 'exercise_id', //References ScheduledExercises
    onDelete: 'CASCADE',
});

Exercises.belongsTo(ScheduledExercises, {
    foreignKey: "exercise_id",
});

Exercises.belongsTo(Favoriteexercises, {
    foreignKey: "exercise_id",
});

module.exports = {Exercises, ScheduledExercises, Musclegroup, Muscle, User,Favoriteexercises}; 

