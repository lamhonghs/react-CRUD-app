var express = require('express');
var _ = require('lodash');
var router = express.Router();
let posts = [
  { id: 1, title: 'Posts 1', description: 'description 1' },
  { id: 2, title: 'Posts 2', description: 'description 2' },
  { id: 3, title: 'Posts 3', description: 'description 3' },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.json(posts);
});

router.post('/', function (req, res) {
  const data = req.body;
  console.log(data);
  data.id = posts.length;
  posts.push(data);
  res.send('ok');
  // ...
});

router.get('/:id', function (req, res, next) {
  const rs = posts.filter(function (t) {
    return t.id == req.params.id;
  });
  res.json(rs.length > 0 ? rs[0] : {});
});

router.patch('/:id', function (req, res, next) {
  const index = _.findIndex(posts, function (item) {
    return item.id == req.params.id;
  });
  const data = req.body;
  posts[index] = data;
  res.json(data);
});

router.delete('/:id', function (req, res, next) {
  _.remove(posts, function (item) {
    return item.id == req.params.id;
  });
  res.json(posts);
});

module.exports = router;
