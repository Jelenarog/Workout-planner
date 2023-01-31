
const User = require('./User');
const Exercises = require('../models/exercises');
const ScheduledExercises = require('../models/scheduledexercises'); 
const Musclegroup = require('../models/musclegroup'); 
const Muscle = require('../models/muscle'); 
const Favoriteexercises = require('../models/favoriteexercises');

User.hasMany(ScheduledExercises,{
    foreignKey: "user_id",
});

User.hasMany(Favoriteexercises,{
    foreignKey: "user_id",
});

ScheduledExercises.belongsTo(User, {
    foreignKey: "user_id",
})

Musclegroup.hasMany(Muscle, {
    foreignKey: "muscle_id",
    onDelete: 'CASCADE',
});
//added
// Muscle.belongsTo(Musclegroup, {
//     foreignKey: "muscle_id",
// });

Musclegroup.hasMany(Exercises, {
    foreignKey: "musclegroup_id",
   onDelete: 'CASCADE',
});

//added 
// Exercises.belongsTo(Musclegroup, {
//     foreignKey: "musclegroup_id",
// });

Exercises.hasMany(ScheduledExercises, {
    foreignKey: "exercise_id",
    onDelete: 'CASCADE',
});

//added 
// ScheduledExercises.belongsTo(Exercises, {
//     foreignKey: "exercise_id",
// });


module.exports = {Exercises, ScheduledExercises, Musclegroup, Muscle, User, Favoriteexercises}; 

