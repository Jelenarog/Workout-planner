const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

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