// global requires // 
const sequelize = require('../config/connection');

// global models //
const Exercises = require('../models/exercises');
const ScheduledExercises = require('../models/scheduledexercises'); 
const Musclegroup = require('../models/musclegroup'); 
const Muscle = require('../models/muscle');
const Favoriteexercises = require('../models/favoriteexercises'); 
const User= require('../models/User');

// seed JSON Files // 
const musclegroupjson = require ('./musclegroup.json'); 
const musclejson = require ('./muscle.json'); 
const exercisesjson = require('./exercises.json');
const userData = require('./userData.json');

// seed function // 
const seedDatabase = async() => {
    // rebuld the full tables //   
    await sequelize.sync({ force: true });

    // bulk create the musclegroup table and data // 
    await Musclegroup.bulkCreate(musclegroupjson);

    // bulk create the muscle table and data //
    await Muscle.bulkCreate(musclejson);
    
    // bulk create the excercises table and data //
    await Exercises.bulkCreate(exercisesjson);
   
    // bulk create the user table and data //
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });
    
    // create the scheduledexercises table and record // 
    await ScheduledExercises.create({
        user_id: '1',
        date: '2023/01/05',
        exercise_id: '1',
        exercise_sets: 10,
        exercise_reps: 20,
        exercise_weight: 30,
        exercise_minutes: 30,
    });
    
    // create the favoriteexercises table and record // 
    await Favoriteexercises.create({
      exercise_id: '1',
      user_id: '1',
  });

    // exit the function process // 
      process.exit(0);

};

seedDatabase();

