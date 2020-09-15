// import express
const express = require('express');
const router = express.Router();
// import burger.js
const burger = require('../models/burger.js');

// create routes
router.get('/', (req, res) => {
  burger.all(function(data) {
    const hbsObject = { 
      burgers: data
    };
    console.log(hbsObject);  
    res.render('index',hbsObject);
  });
});

router.post('/api/burgers', (req, res) => {
  burger.create(
    [
      'burger_name', 'devoured' 
    ],
    [
      req.body.burger_name, req.body.devoured
    ],
    function (result) {
      // send back the id of new burger
      res.json({ id: result.insertId });
    }
  );
});

router.put('/api/burgers/:id', function(req, res) {
  const condition = 'id = ' + req.params.id;
  console.log('condition', condition);
  burger.update({
    devoured: req.body.devoued
  }, condition, function(results) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete('/api/burgers/:id', function(req, res) {
  const condition = 'id = ' + req.params.id;
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
