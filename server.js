const express = require('express');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3008;

// turn activate the connection to the DB and local host port server// 
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });