const router = require('express').Router();
const { User, Exercises, ScheduledExercises, Musclegroup, Muscle, Favoriteexercises } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');//import helper authentication that helps identify if user logged in

//Dashboard Route
router.get('/dashboard',  (req, res) => {
   res.render('dashboard-page', {loggedIn : req.session.loggedIn} ); 
 });

// Homepage Route
router.get('/', (req, res) => {
  res.render('homepage', {loggedIn: req.session.loggedIn});
  });

// Registration Route
router.get('/register',  (req, res) => {
  res.render('register-page'); 
});

// Login route
router.get('/login',  (req, res) => {
    res.render('login-page'); 
  });

module.exports = router;

 