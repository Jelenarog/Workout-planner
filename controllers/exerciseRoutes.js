const router = require('express').Router();
const { User, Exercises, ScheduledExercises, Musclegroup, Muscle, Favoriteexercises } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');//import helper authentication that helps identify if user logged in

router.get('/all', withAuth, async(req, res) => {
    try {
      const allExercises = await Exercises.findAll({
        raw:true,
        nest: true,
        include:[
            {
                model: Musclegroup,
                attributes:["musclegroup_name"],
            },
          ],
      });
  
      
      const userFavorites = await Favoriteexercises.findAll({
        where: {
          user_id: req.session.user.dataValues.user_id,
        },
      });
  
      const favoritesArr = userFavorites.map((favorite) => {
        return favorite.exercise_id;
      });
  ;
      const exercises = allExercises.map((exercise) => {
        if (favoritesArr.includes(exercise.exercise_id)) {
          exercise.favorite = true;
        };
  
        switch(exercise.exercise_difficulty) {
          case 'beginner': exercise.beginner = true;
          break;
          case 'intermediate': exercise.intermediate = true;
          break;
          case 'expert': exercise.expert = true;
          break;
          
        }
        return exercise;
      });
  
        res.render('exercise-page', {exercises, loggedIn: req.session.loggedIn});
  
    } catch (error) {
      res.status(500).json(error);
    };
  });
  
  //get specific exercises 
router.get('/:id', withAuth, async (req, res) => {
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
  
        const userFavorites = await Favoriteexercises.findAll({
          where: {
            user_id: req.session.user.dataValues.user_id,
          },
        });
    
        const favoritesArr = userFavorites.map((favorite) => {
          return favorite.exercise_id;
        });
        
        const exercises = newExercises.map((exercise) => {
          if (favoritesArr.includes(exercise.exercise_id)) {
            exercise.favorite = true;
          };
          //Could possible make a hook to prevent
          switch(exercise.exercise_difficulty) {
            case 'beginner': exercise.beginner = true;
            break;
            case 'intermediate': exercise.intermediate = true;
            break;
            case 'expert': exercise.expert = true;
            break;
            
          }
          return exercise;
        });
    
          res.render('exercise-page', {exercises, loggedIn: req.session.loggedIn});
      
        }
       catch(err) {
          res.status(404).json({message:'Please enter a new category name.'});
        
        };
      });

  module.exports = router;