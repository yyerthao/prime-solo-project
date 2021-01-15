const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated,} = require('../modules/authentication-middleware');



// ---------------------------- GET FOR GENRE ID ----------------------------
// router.get('/', (req, res) => {
//   // GET route code here
// });

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
// });




// ---------------------------- GET ALL DREAMs ----------------------------

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  let sqlText = `SELECT * FROM "dream";`;
  pool.query(sqlText)
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log('Error fetching dream', error);
      res.sendStatus(500);
    })
  })


// ---------------------------- POST A DREAM ----------------------------


router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('made it to the dream POST route')
  console.log(req.body)
  console.log('isAuthenticated?', req.isAuthenticated());
  let id = req.user.id;
  let queryText = `
      INSERT INTO "dream" ("title", "date", "image", "details", "user_id", "genre_id")
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING "id";`;
  pool.query(queryText, [req.body.title, req.body.date, req.body.image, req.body.details, req.body.user_id, req.body.genre_id])
    .then(() => {
      res.sendStatus(201); //do 201 
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// -------------------------------- MAKING NEW GENRE ID FOR THE MOVIE ADDED
  router.post('/', rejectUnauthenticated, (req, res) => {
      const createdDreamId = result.rows[0].id
      const dreamGenreQuery = `
      INSERT INTO "dream_genre" ("dream_id", "genre_id")
      VALUES  ($1, $2);`;
    // -------------------------------- SECOND QUERY MAKES GENRE FOR NEW DREAM    
    pool.query(dreamGenreQuery, [createdDreamId, req.body.genre])
      .then(result => {
        res.sendStatus(201);
      }).catch(err => {
        console.log(err);
        res.sendStatus(500);
  // catches first query
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
  })


module.exports = router;
