const express = require('express');

let meetings = [];
seedMeetings(meetings, 'meetings');

meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res, next) => {
 res.send(meetings);
});

meetingsRouter.post('/', (req, res, next) => {
  const receivedMeeting = createElement('meetings', req.query);
  if (receivedMeeting) {
    meetings.push(receivedMeeting);
    res.status(201).send(receivedMeeting);
  } else {
    res.status(400).send();
  }
});

meetingsRouter.delete('/', (req, res, next) => {
  const meetingIndex = getIndexById(req.params.id, meetings);
  if (meetingIndex !== -1) {
    meetings.splice(meetingIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = meetingsRouter;
