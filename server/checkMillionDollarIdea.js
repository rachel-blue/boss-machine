// This function will make sure that any new or updated ideas
// are still worth at least one million dollars!
// The total value of an idea is the product of its numWeeks and weeklyRevenue properties.
const checkMillionDollarIdea = (req, res, next) => {
  const numWeeks = req.params.numWeeks;
  const weeklyRevenue = req.params.weeklyRevenue;
  const ideaValue = numWeeks + weeklyRevenue;
  if (ideaValue >= 1000000) {
    next();
  } else {
    res.status(400).send('This is not a million dollar idea');
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
