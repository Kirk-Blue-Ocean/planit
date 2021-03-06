const express = require('express');
const { eventRouter } = require('./routes/events.js');
const { loginRouter } = require('./routes/login.js');

const app = express();


const initRoutes = (httpServer) => {
  httpServer.use('/api/events', eventRouter);
  httpServer.use('/', loginRouter);
};

// express.get('/logout', (req, res) => {
//   res.send('<h1>Logout</h1>')
// });

module.exports.app = app;
module.exports.initRoutes = initRoutes;
