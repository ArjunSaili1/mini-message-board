var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello World",
    user: "Arjun Saili",
    added: new Date()
  },
  {
    text: "This is a message",
    user: "Some Person",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next){
  res.render('form');
})

router.post('/new', function(req, res, next){
  console.log(req.body)
  messages.push({text: req.body.messageText, user: req.body.user, added: new Date()})
  res.redirect('/')
})

module.exports = router;