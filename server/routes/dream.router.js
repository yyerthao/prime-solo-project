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
  let sqlText = `SELECT TO_CHAR(NOW() :: DATE, 'mm/dd/yyyy'), dream.title, dream.image, dream.details FROM "user"
	JOIN dream ON dream.user_id = "user".id
	WHERE "user".id = $1;
	`;
  pool.query(sqlText, [req.user.id])
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
  pool.query(queryText, [req.body.title, req.body.date, req.body.image, req.body.details, id, req.body.genre_id])
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



// -------------------------------- SECOND QUERY MAKES GENRE FOR NEW DREAM    
// router.get('/:id', rejectUnauthenticated, (req, res) => {
//   let id = req.params.id;
//   console.log('Id of chosen dream', id);
//   // Add query to get all genres
//   let sqlText = `
//       SELECT * FROM dream WHERE user_id = $1 `;
//   pool.query(sqlText, [id])
//     .then((result) => {
//       console.log(result.rows[0])
//       res.send(result.rows[0]);
//     }).catch((error) => {
//       console.log('Error GET genre of chosen movie', error)
//       res.sendStatus(500);
//     });
// })



// add put route here


// add delete route





module.exports = router;
