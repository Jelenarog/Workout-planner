const router = require('express').Router();
const { User, Exercises, ScheduledExercises, Musclegroup, Muscle, Favoriteexercises } = require('../../models');
const withAuth = require('../../utils/auth');//import helper authentication that helps identify if user logged in

//Add favorite
router.post('/add', withAuth, async(req, res) => {

    try {
        const newFavorite = await Favoriteexercises.create({ 
          exercise_id: req.body.exerciseId,
          user_id: req.session.user.dataValues.user_id,
        });
        
        res.status(200).json({message: 'Exercise has been added to favorites.'})

    } catch (error) {
      res.status(500).json(error);
    };
});

//Delete favorite
router.post('/delete', withAuth, async(req, res) => {
  try {
    const favorite = await Favoriteexercises.destroy(
      {
        where: {
          favoriteexercise_id: req.body.exerciseId
        },
      },
    );

    if(!favorite) {
      res.status(400).json({message: "No favorite found"})
    };
    res.status(200).json(favorite)

  } catch (error) {
    res.status(500).json(error)
  };
});

module.exports = router;