const sequelize = require('../config/connection');
const Exercises = require('../models/exercises');
const ScheduledExercises = require('../models/scheduledexercises'); 
const Musclegroup = require('../models/musclegroup'); 
const Muscle = require('../models/muscle');
const Favoriteexercises = require('../models/favoriteexercises'); 
const User= require('../models/User');
const musclegroupjson = require ('./musclegroup.json'); 
const musclejson = require ('./muscle.json'); 
const exercisesjson = require('./exercises.json');

const userData = require('./userData.json');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

 
    await Musclegroup.bulkCreate(musclegroupjson);

    // await Musclegroup.create({
    //     musclegroup_name: 'Legs',
    // });

    
    await Muscle.bulkCreate(musclejson);
    
    // await Muscle.create({
    //     muscle_name: 'Quads',
    //     musclegroup_id: '1',

    // });


    await Exercises.bulkCreate(exercisesjson);

    //     await Exercises.create({
    //         exercise_name: "Smith Machine Calf Raise",
    //         exercise_type: "strength",
    //         musclegroup_id: 1,
    //         exercise_equipment: "machine",
    //         exercise_difficulty: "intermediate",
    //         exercise_instructions: "Place a block or weight plate below the bar on the Smith machine. Set the bar to a position that best matches your height. Once the correct height is chosen and the bar is loaded, step onto the plates with the balls of your feet and place the bar on the back of your shoulders. Take the bar with both hands facing forward. Rotate the bar to unrack it. This will be your starting position. Raise your heels as high as possible by pushing off of the balls of your feet, flexing your calf at the top of the contraction. Your knees should remain extended. Hold the contracted position for a second before you start to go back down. Return slowly to the starting position as you breathe in while lowering your heels. Repeat for the recommended amount of repetitions"
        

    // });
    
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });
    

    await ScheduledExercises.create({
        user_id: '1',
        date:'test',
        exercise_id: '1',
        exercise_variable: 30,
    });
    
    await Favoriteexercises.create({
      exercise_id: '1',
      user_id: '1',
  });

 
      process.exit(0);

};

seedDatabase();

