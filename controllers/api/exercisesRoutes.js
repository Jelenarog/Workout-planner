const router = require('express').Router();
const { User, Exercises, ScheduledExercises, Musclegroup, Muscle } = require('../models');
//const withAuth = require('../../utils/auth');


//**TO DO :
//we might have to do exercise name?
//add withAuth

//save exercise in schedule 
router.post('/exercise', async (req, res) => {
  try {
    const newExercise = await ScheduledExercises.create({ 
        date: req.body.date,
        exercise_id: req.body.exercise_id,
        exercise_variable: req.body.id.exercise_variable
     
    });
console.log(newExercise);
//res.status(200).json(newExercise);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get all exercises on specific date

router.get('/date/:id', async (req, res) => {
  try {
    const storedExercises = await ScheduledExercises.findAll({
      raw:true,
      //nest: true,
          where: {
            date: req.body.date,
          }, 
          include:[
              {
                  model: Exercises
                 
              },
          ],
          });
          res.status(200).json(storedExercise);
    }
         catch(err) {
            res.status(404).json({message:'Server error.'});
          
          };
        });
    


  module.exports = router;