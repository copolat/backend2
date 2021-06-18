var express = require('express');
var router = express.Router();
const UserSchema = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res) {
  const userSchema = new UserSchema(req.body)
  userSchema.save()
  .then((data)=>{res.json(data)})
  .catch((err)=>{res.json(err)})
})

module.exports = router;
