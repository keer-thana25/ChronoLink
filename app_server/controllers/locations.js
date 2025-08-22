/* GET home page */
const homelist = (req, res) => {
  res.render('locations-list', { title: 'ChronoLink' });
};

/* GET location info page */
const locationInfo = (req, res) => {
  res.render('location-info', { title: 'Location Info' });
};

/* GET add review page */
const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add Review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
