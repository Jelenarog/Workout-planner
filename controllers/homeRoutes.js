const router = require('express').Router();
const { User, Exercises, ScheduledExercises, Musclegroup, Muscle } = require('../models');
const withAuth = require('../../utils/auth');//import helper authentication that helps identify if user logged in
// CREATE new user
//to do get dashbord render dashboard

// Login route//TO DO:update to handlebar name
router.get('/dashboard',  (req, res) => {
  res.render('dashboard-page', {loggedIn : req.session.loggedIn} ); 
});

//get exercises show all exercises 
router.get('exercises',  (req, res) => {
  res.render('exercises-page', {loggedIn : req.session.loggedIn} ); 
});

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
  
  module.exports = router;
  