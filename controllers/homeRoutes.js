const router = require('express').Router();
const { User, Exercises, ScheduledExercises, Musclegroup, Muscle, Favoriteexercises } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');
// const withAuth = require('../../utils/auth');//import helper authentication that helps identify if user logged in






router.get('/dashboard',  (req, res) => {
   res.render('dashboard-page', {loggedIn : req.session.loggedIn} ); 
 });

// Login route
router.get('/', (req, res) => {
  res.render('homepage', {loggedIn: req.session.loggedIn});
  });



// CREATE new user
router.get('/register',  (req, res) => {

    res.render('register-page'); 
  });



// Login route
router.get('/login',  (req, res) => {
    res.render('login-page'); 
  });
  

// Login route
router.get('/test',  (req, res) => {
  console.log(req.session.user.user_id);
  res.json(req.session.user.user_id); 
});


router.get('/exercises/all', withAuth, async(req, res) => {
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

    router.get('/schedule/all', withAuth, async(req, res) => {
      try {
        const allScheduled = await ScheduledExercises.findAll({
          raw: true,
          nest: true,
          where: {
            user_id: req.session.user.dataValues.user_id,
          },
          include: [
            {
              model: Exercises,
            },
          ],
        })
       /* if (!allScheduled) {
          res.render('user-schedule', {noScheduled: true})
        } else {
          res.render('user-schedule',{allScheduled})
        } */
        res.status(200).json({allScheduled});
        
      }catch(error) {
        res.status(500).json(error);
      }
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
router.get('/exercises/:id', withAuth, async (req, res) => {
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
  ;
      const exercises = newExercises.map((exercise) => {
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
    
      }
     catch(err) {
        res.status(404).json({message:'Please enter a new category name.'});
      
      };
    });



        router.get('/dashboard/:id', withAuth, async (req, res) => {
          try {
            const storedExercises = await ScheduledExercises.findAll({
              raw:true,
              nest: true,
                  where: {
                    [Op.and]: [{ date:req.params.id }, { user_id: req.session.user.dataValues.user_id }], 
                  }, 
                  include:[
                      {
                          model: Exercises, 
                      },
                    ],
                  });
                  
                  
                  const exerciseList = await Exercises.findAll({
                    raw:true,
                  });
                  // res.status(200).json(storedExercises);
                 res.render('dashboard-page', {storedExercises, exerciseList, loggedIn: req.session.loggedIn, date: req.params.id, name: req.session.user.dataValues.username});
                 }
                
                 catch(err) {
                    res.status(404).json({message:'Server error.'});
                  
                  };
                });
                router.get('/schedule/:id', withAuth, async (req, res) => {
                  try {
                    const storedExercises = await ScheduledExercises.findAll({
                      raw:true,
                      nest: true,
                          where: {
                
                            date: req.params.id, user_id: req.session.user.dataValues.user_id 
                           // [Op.and]:[ { date: req.params.date,},{user_id: req.session.user.dataValues.user_id}]
                            
                          }, 
                          include:[
                              {
                                  model: Exercises,
         
                              },
                             
                          ],
                          });
                      
                          res.render('user-schedule', {storedExercises, loggedIn: req.session.loggedIn});
                        }
                        
                         catch(err) {
                            res.status(404).json({message:'Server error.'});
                          
                          };
                        });
                 

  module.exports = router;

 