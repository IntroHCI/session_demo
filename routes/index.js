
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'Session Demo',
    username: req.session.username
  });
};