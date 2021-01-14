const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated,} = require('../modules/authentication-middleware');



// ---------------------------- GET FOR GENRE ID ----------------------------
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});




// ---------------------------- GET FOR DREAM ----------------------------

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  let sqlText = `SELECT * FROM "dream";`;
  pool.query(sqlText)
    .then((result) => {
      res.send(result.rows[0]);
    }).catch((error) => {
      console.log('Error fetching dream', error);
      res.sendStatus(500);
    })
  })

/**
// ---------------------------- POST DREAM ----------------------------
 */
router.post('/', (req, res) => {
  console.log(req.body)
  // POST route code here
  const dreamSql = `
  INSERT INTO "dream" ("title", "date", "image", "details")
  VALUES ($1, $2, $3, $4, $5)
  RETURNING "id";`;

  pool.query(dreamSql, [req.body.title, req.body.date, req.body.image, req.body.details])
  .then(result => {
    console.log('New Dream Id:', result.rows[0].id); // ID is here!

      // const createdDreamId = result.rows[0].id;
      // const dreamGenreQuery = `
      // INSERT INTO "movies_genres" ("movie_id", "genre_id")
      // VALUES  ($1, $2);`;

  // SECOND QUERY MAKES GENRE FOR NEW DREAM   
  // pool.query(dreamGenreQuery, [createdDreamId, req.body.genre])
  //   .then(result => {
  //     res.sendStatus(201);
  //   }).catch(err => {
  //     console.log(err);
  //     res.sendStatus(500);
  //   })
  })
})

module.exports = router;
