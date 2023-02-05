const router = require('express').Router();
const { User, Exercises, ScheduledExercises, Musclegroup, Muscle, Favoriteexercises } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');//import helper authentication that helps identify if user logged in
   
   // User Dashboard Route
   router.get('/:id', withAuth, async (req, res) => {
    try {
      // Grab today's scheduled exercises
      const storedExercises = await ScheduledExercises.findAll({
        raw:true,
        nest: true,
            where: {
              [Op.and]: [{ date:req.params.id }, { user_id: req.session.user.dataValues.user_id }], 
            }, 
            include:[
                {
                    model: Exercises,
                    include: 
                      {
                        model: Musclegroup,
                      }
                },
              ],
            });
            
            //Grab all completed exercises
            const allCompletedExercises = await ScheduledExercises.findAll({
              raw:true,
              nest: true,
              where: {
                [Op.and]: [{ user_completed: 1 }, { user_id: req.session.user.dataValues.user_id }], 
              }, 
            });
            const numberOfCompletedExercises = allCompletedExercises.length;

            //Find all user's favorite exercises
            const favorites = await Favoriteexercises.findAll({
              raw: true,
              nest: true,
              where: {
                user_id: req.session.user.dataValues.user_id,
              },
              include: [
                {
                  model: Exercises,
                  include: [
                    {
                      model: Musclegroup,
                    },
                  ],
                },
              ],
            });

            //Grab all exercises for fitness scheduler options
            const exerciseList = await Exercises.findAll({
              raw:true,
            });

          //Grab user info excluding password
            const userData =  await User.findAll({
              raw:true,

              where: { user_id: req.session.user.dataValues.user_id },
              attributes: {
                exclude: ['password']
              }
            });
            const user = userData[0];
           

              res.render('dashboard-page', {storedExercises, exerciseList, user, favorites, numberOfCompletedExercises, loggedIn: req.session.loggedIn, date: req.params.id, name: req.session.user.dataValues.username});
           }
          
           catch(err) {
              res.status(404).json({message:'Server error.'});
            
            };
          });

module.exports = router;