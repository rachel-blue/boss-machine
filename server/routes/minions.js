const express = require('express');

let minions = [];
seedMinions(minions, 'minions');

minionsRouter = express.Router();

minionsRouter.get('/', (req, res, next) => {
  res.send(minions);
});

minionsRouter.post('/', (req, res, next) => {
  const receivedMinion = createElement('minions', req.query);
  if (receivedMinion) {
    minions.push(receivedMinion);
    res.status(201).send(receivedMinion);
  } else {
    res.status(400).send();
  }
});

minionsRouter.get('/minionId', (req, res, next) => {
  const foundMinion = getElementById(req.params.id, minions);
  if (foundMinion) {
    res.send(foundMinion);
  } else {
    res.status(404).send();
  }
});

minionsRouter.put('/minionId', (req, res, next) => {
  const minionIndex = getIndexById(req.params.id, minions);
  if (minionIndex !== -1) {
    updateElement(req.params.id, req.query, minions);
    res.send(minions[minionIndex]);
  } else {
    res.status(404).send();
  }
});

minionsRouter.delete('/minionId', (req, res, next) => {
  const minionIndex = getIndexById(req.params.id, minions);
  if (minionIndex !== -1) {
    minions.splice(minionIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = minionsRouter;
