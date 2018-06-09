const express = require('express');

const posts = express.Router();


// @route:  GET api/posts/test
// @desc:   tests post route
// @access: public
posts.get('/test', (req, res) => {
  res.json({ msg: 'we postin' });
});


module.exports = posts;