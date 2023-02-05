const router = require('express').Router();
const  {User, ScheduledExercises}  = require('../../models');
const withAuth = require('../../utils/auth');//import helper authentication that helps identify if user logged in

router.post('/complete', withAuth, async (req, res) => {
    try {
        console.log('complete exercise route')
        const schedule = await ScheduledExercises.findByPk(req.body.scheduleId);

        schedule.set({
            user_completed: 1,
        });
        schedule.save();

        if (!schedule) {
            res.status(400).json({message: 'There has been an error updating the scheduled exercise.'});
        };

        res.status(202).json({message: 'Schedule has been updated.'});
    } catch (error) {
        res.status(400).json('No schedule found. Catch error');
    }
})


module.exports = router;