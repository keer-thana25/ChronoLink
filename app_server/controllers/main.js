 /* GET homepage */
 const index = (req, res) => {
  res.render('index', { title: 'ChronoLink' });
 };
  module.exports = {
  index
 };