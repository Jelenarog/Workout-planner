const router = require('express').Router();
const { User, Exercises, ScheduledExercises, Musclegroup, Muscle } = require('../models');
const { Op } = require("sequelize");
//const withAuth = require('../../utils/auth');//import helper authentication that helps identify if user logged in






// router.get('/dashboard',  (req, res) => {
//   res.render('dashboard-page', {loggedIn : req.session.loggedIn} ); 
// });

// Login route
router.get('/', async (req, res) => {


  const userData = await User.findAll({
    raw:true
  })

  // const users = userData.map((user)=>{
  //   user.get({plain:true});
  // })
  console.log(userData);
  //res.status(200).json(users);
  });



// CREATE new user
router.get('/register',  (req, res) => {

    res.render('register-page'); 
  });



// Login route
router.get('/login',  (req, res) => {
    res.render('login-page', {loggedIn : req.session.loggedIn} ); 
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
    res.render('exercise-page', {"newExercises": newExercises})
}
     catch(err) {
        res.status(404).json({message:'Please enter a new category name.'});
      
      };
    });





  module.exports = router;
  