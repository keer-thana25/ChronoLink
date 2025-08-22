/* GET home page */
const homelist = (req, res) => {
  res.render('index', { title: 'ChronoLink' });
};

/* GET location info page */
const locationInfo = (req, res) => {
  res.render('index', { title: 'Location Info' });
};

/* GET add review page */
const addReview = (req, res) => {
  res.render('index', { title: 'Add Review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
