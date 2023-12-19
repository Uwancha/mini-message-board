const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Hi there!",
    user: "Lula",
    added: new Date()
  },
  {
    text: "Heyyy",
    user: "Chare",
    added: new Date()
  },
  {
    text: "Howdy",
    user: "Lembo",
    added: new Date()
  },
  {
    text: "fine",
    user: "Nati",
    added: new Date()
  },
  {
    text: "Fella",
    user: "Abel",
    added: new Date()
  },
  {
    text: "hey gus",
    user: "Betty",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});

/* Post new form */ 
router.post('/new', (req, res) => {
  const {messageUser, messageText } = req.body

  messages.push({text: messageText, user: messageUser, added: new Date()});

  res.redirect('/')
})

module.exports = router;
