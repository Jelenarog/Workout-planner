const router = require('express').Router();
//const { User } = require('../models');
const withAuth = require('../utils/auth');//import helper authentication that helps identify if user logged in


// Login route
router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/'); TO DO: redirect to ?
  //   return;
  // }
    res.status(200).json({ message: 'Logged in' })
    console.log('You are logged in')
    // TO DO
    //res.render('login'); 
  });
  
  module.exports = router;
  