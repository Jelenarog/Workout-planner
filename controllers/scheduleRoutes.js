const router = require('express').Router();
const { User, Exercises, ScheduledExercises, Musclegroup, Muscle, Favoriteexercises } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');//import helper authentication that helps identify if user logged in

//Grab scheduled exercises
router.get('/:id', withAuth, async (req, res) => {
    try {
        const storedExercises = await ScheduledExercises.findAll({
            raw: true,
            nest: true,
            where: {
                date: req.params.id, user_id: req.session.user.dataValues.user_id
            },
            include: [
                {
                    model: Exercises,
                },
            ],
        });

        res.render('user-schedule', { storedExercises, loggedIn: req.session.loggedIn });
    }

    catch (err) {
        res.status(404).json({ message: 'Server error.' });
    };
});

module.exports = router;