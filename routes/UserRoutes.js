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
  }
];

router.get('/', (req, res) => {
    res.render('index', { title:"Mini Messageboard", messages: messages });
});

router.get('/new', (req, res) => {
    res.render('new');
});

router.post('/new', (req, res) => {
    const message = {
        text: req.body.message,
        user: req.body.user,
        added: new Date()
    };
    messages.push(message);
    res.redirect('/');

messages.push({
    text: message,
    user: user,
    added: new Date()
})
});

router.get('/get', (req, res) => {
    res.json(messages);
});

module.exports = router;