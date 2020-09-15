// import express
const express = require('express');
const router = express.Router();
// import burger.js
const burger = require('../models/burger.js');

// create routes
router.get('/', (req, res) => {
  const hbsObject = { burgers: burger.all() };
  console.log(hbsObject);
  res.render('index', hbsObject);
});

router.post('/api/burgers', (req, res) => {
  const result = burger.create(
    [
      'burger_name', 'devoured' 
    ],
    [
      req.body.burger_name, req.body.devoured
    ]
  );
  // send back the id of new burger
  res.json({ id: result.insertId });
});

router.put();

router.delete();


module.exports = router;
