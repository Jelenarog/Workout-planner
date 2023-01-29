const path = require('path');
const express = require('express');
const session = require('express-session');//package to create session and set cookies
const routes = require('./controllers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false, 
  saveUninitialized: true, 
  //when we create new session it will be stored in db
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//initialize middleware and passing session var, each time user creates request to our application we will call this middleware
app.use(session(sess));

app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
      console.log(
        `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
      )
    );
  });