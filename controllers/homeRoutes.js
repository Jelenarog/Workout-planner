const router = require('express').Router();
const { User, Exercises, ScheduledExercises, Musclegroup, Muscle } = require('../models');
const { Op } = require("sequelize");
//const withAuth = require('../../utils/auth');//import helper authentication that helps identify if user logged in






// router.get('/dashboard',  (req, res) => {
//   res.render('dashboard-page', {loggedIn : req.session.loggedIn} ); 
// });

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
    res.render('exercise-page', {newExercises, loggedIn: req.session.loggedIn});
    }
     catch(err) {
        res.status(404).json({message:'Please enter a new category name.'});
      
      };
    });





  module.exports = router;
  