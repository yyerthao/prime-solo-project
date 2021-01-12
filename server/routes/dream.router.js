const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/dream', (req, res) => {
  // GET route code here

});

/**
 * POST route template
 */
router.post('/dream', (req, res) => {
  // POST route code here
  const insertMovieQuery = `
  INSERT INTO "dream" ("title", "date", "url", "details")
  VALUES ($1, $2, $3, $4)
  RETURNING "id";`


});

module.exports = router;
