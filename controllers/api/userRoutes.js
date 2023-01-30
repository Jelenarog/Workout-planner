const router = require('express').Router();
const  {User}  = require('../../models');
const withAuth = require('../../utils/auth');//import helper authentication that helps identify if user logged in
// CREATE new user
router.post('/register', async (req, res) => {
  try {
    console.log('register route')
    console.log(req.body)
    const newUserData = await User.create({ 
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });
   
if(!newUserData){
  res.status(400).json({message:'insufficient date'})
  return;
}
res.status(200).json(newUserData);
    // req.session.save(() => {
    //   req.session.loggedIn = true;
    //   console.log('New user created')
    //   res.status(200).json(dbUserData);
    // });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user=dbUserData;
      console.log('Save session user and loggedIN',req.session.cookie);

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!'});
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // Logout
router.post('/logout', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});





module.exports = router;
