const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');//if session expired redirect user to login page TO DO handlebar to be created
    } else {
      //if user logged continue with execution of controller
      next();
    }
  };
  
  module.exports = withAuth;
  