const router = require('express').Router();
const { User, Exercises, ScheduledExercises, Musclegroup, Muscle } = require('../models');
const { Op } = require("sequelize");
//const withAuth = require('../../utils/auth');//import helper authentication that helps identify if user logged in
// CREATE new user
//to do get dashbord render dashboard

// Login route//TO DO:update to handlebar name
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



// Login route
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
    //   if( isNaN(req.params.id ) ){
    //   const dbExercises = await Exercises.findAll({
          
    //   where: {
    //       exercise_type: req.params.id
    //   }, include:[
    //       {
    //           model: Musclegroup,
    //       },
    //   ],
    //  });
    //  console.log ("db experiance"+ dbExercises);

    // //  const newExercises = dbExercises.map((exercise)=>{
    // //   exercise.get({plain: true});
    // //   })
    //   res.status(200).json(deExercises);
    //   //console.log ("mappede"+ newExercises );
    //   //res.render('exercises-page', {loggedIn : req.session.loggedIn} );
    //   }
  // else {
  const newExercises = await Exercises.findAll({
      where: {
        [Op.or]:[ { musclegroup_id: req.params.id},{exercise_type: req.params.id}]
        
      }, 
      include:[
          {
              model: Musclegroup,
          },
      ]
      })
     res.status(200).json(newExercises);
}
     catch(err) {
        res.status(404).json({message:'Please enter a new category name.'});
      
      };
    });



  module.exports = router;
  