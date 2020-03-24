const express = require('express');

let ideas = [];
seedIdeas(ideas, 'ideas');

ideasRouter = express.Router();

ideasRouter.get('/', (req, res, next) => {
  res.send(ideas);
});

ideasRouter.post('/', (req, res, next) => {
  const receivedIdea = createElement('ideas', req.query);
  if (receivedIdea) {
    ideas.push(receivedIdea);
    res.status(201).send(receivedIdea);
  } else {
    res.status(400).send();
  }
});

ideasRouter.get('/ideaId', (req, res, next) => {
  const foundIdea = getElementById(req.params.id, ideas);
  if (foundIdea) {
    res.send(foundIdea);
  } else {
    res.status(404).send();
  }
});

ideasRouter.put('/ideaId', (req, res, next) => {
  const ideaIndex = getIndexById(req.params.id, ideas);
  if (ideaIndex !== -1) {
    updateElement(req.params.id, req.query, ideas);
    res.send(ideas[ideaIndex]);
  } else {
    res.status(404).send();
  }
});

ideasRouter.delete('/ideaId', (req, res, next) => {
  const ideaIndex = getIndexById(req.params.id, ideas);
  if (ideaIndex !== -1) {
    ideas.splice(ideaIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = ideasRouter;
