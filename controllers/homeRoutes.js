const router = require('express').Router();
//const { User } = require('../models');

//to do get dashbord render dashboard

//get excercises show all excercises 

//


// Login route
router.get('/register',  (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/'); TO DO: redirect to ?
  //   return;
  // }
    //res.status(200).json({ message: 'Logged in' })
  
    res.render('register-page'); 
  });


// Login route
router.get('/login',  (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/'); TO DO: redirect to ?
  //   return;
  // }
    //res.status(200).json({ message: 'Logged in' })
  
    res.render('login-page'); 
  });
  
  module.exports = router;
  