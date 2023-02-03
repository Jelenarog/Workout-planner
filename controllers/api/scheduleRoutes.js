/*

router.get('/date/:id', async (req, res) => {
  try {
    const storedExercises = await ScheduledExercises.findAll({
      raw:true,
      //nest: true,
          where: {
            date: req.body.date,
          }, 
          include:[
              {
                  model: Exercises
                 
              },
          ],
          });
          res.status(200).json(storedExercise);
    }
        
         catch(err) {
            res.status(404).json({message:'Server error.'});
          
          };
        });

         res.render('user-schedule', {storedExercises, loggedIn: req.session.loggedIn});

*/