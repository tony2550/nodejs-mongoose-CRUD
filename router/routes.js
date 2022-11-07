module.exports = (app) => {
  const rules = require('../controllers/rule.controller.js');
  const express = require('express');
  const router = express.Router();

  router.post('/', rules.create);

  router.get('/', rules.findAll);

  router.get('/published', rules.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get('/:id', rules.findOne);

  // Update a Tutorial with id
  router.put('/:id', rules.update);

  // Delete a Tutorial with id
  router.delete('/:id', rules.delete);

  // Create a new Tutorial
  router.delete('/', rules.deleteAll);

  app.use('/api/rules', router);
};
