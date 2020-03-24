const express = require('express');
const apiRouter = express.Router();
const app = express();

const minionsRouter = require('./routes/minions');
app.use('/minions', minionsRouter);

const ideasRouter = require('./routes/ideas');
app.use('/ideas', ideasRouter);

const meetingsRouter = require('./routes/meetings');
app.use('/meetings', meetingsRouter);

module.exports = apiRouter;
