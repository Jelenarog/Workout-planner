const router = require('express').Router();
const { User, Exercises, ScheduledExercises, Musclegroup, Muscle } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');
//const withAuth = require('../../utils/auth');//import helper authentication that helps identify if user logged in






router.get('/dashboard',  (req, res) => {
   res.render('dashboard-page', {loggedIn : req.session.loggedIn} ); 
 });

// Login route
router.get('/', (req, res) => {
  res.render('homepage', {loggedIn: req.session.loggedIn});
  });



// CREATE new user
router.get('/register',  (req, res) => {

    res.render('register-page'); 
  });



// Login route
router.get('/login',  (req, res) => {
    res.render('login-page'); 
  });
  

// Login route
router.get('/test',  (req, res) => {
  console.log(req.session.user.user_id);
  res.json(req.session.user.user_id); 
});


//get exercises show all exercises 
router.get('/exercises/:id', async (req, res) => {
  try{
  const newExercises = await Exercises.findAll({
  raw:true,
  nest: true,
      where: {
        
        [Op.or]:[ { musclegroup_id: req.params.id},{exercise_type: req.params.id}]
        
      }, 
      include:[
          {
              model: Musclegroup,
              attributes:["musclegroup_name"],
          },
      ],
      });

      const exercises = newExercises.map((exercise) => {
        console.log(exercise);
        switch(exercise.exercise_difficulty) {
          case 'beginner': exercise.beginner = true;
          break;
          case 'intermediate': exercise.intermediate = true;
          break;
          case 'expert': exercise.expert = true;
          break;
          
        }
        return exercise;
      });

      console.log(exercises);
        res.render('exercise-page', {exercises, loggedIn: req.session.loggedIn});
    
      }
     catch(err) {
        res.status(404).json({message:'Please enter a new category name.'});
      
      };
    });



        router.get('/dashboard/:date', async (req, res) => {
          try {
            const storedExercises = await ScheduledExercises.findAll({
              raw:true,
              //nest: true,
                  where: {
        
                    date: req.params.date
                    //[Op.and]:[ { date: req.params.date,},{user_id: req.session.user.dataValues.user_id}]
                    
                  }, 
                  include:[
                      {
                          model: Exercises
                         
                      },
                  ],
                  });
                  res.status(200).json(storedExercises);
                 // res.render('user-schedule', {storedExercises, loggedIn: req.session.loggedIn});
            }
                
                 catch(err) {
                    res.status(404).json({message:'Server error.'});
                  
                  };
                });
        
                 

  module.exports = router;

 