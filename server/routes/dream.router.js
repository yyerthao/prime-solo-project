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



// -------------------------------- GET 1 DREAM by ID   
router.get('/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  const queryText =
    `SELECT title, date, image, details, genre FROM dream_genre 
    JOIN dream ON dream.id = dream_genre.dream_id 
    JOIN genre ON dream_genre.genre_id = genre.id 
    WHERE dream.id = $1;`
  pool.query(queryText, [id])
    .then((result) => {
    console.log(result.rows[0]);
    res.send(result.rows[0]);
  })
  .catch((error) => {
    console.log('Error inside GET ID route:', error);
    res.sendStatus(500);
  });
});








// add put route here
// router.put('/:id', rejectUnauthenticated, (req, res) => {
//   console.log('body', req.body);
//   console.log('user', req.user);
//   let sqlText = `UPDATE "dream" SET "title" = $2, "date" = $3, "image" = $4, "details" = $5 WHERE id = $1;`
//   pool.query(sqlText, [req.params.id, req.body.title, req.body.date, req.body.image])
//     .then(() => res.sendStatus(201))
//     .catch((error) => {
//       console.log('ERROR inside PUT route', error)
//       res.sendStatus(501)
//     });
// });




// add delete route
// router.delete('/:id/:user_id', rejectUnauthenticated, (req, res) => {
//   // DELETE route code here
//   console.log('made it to the shelf DELETE route');
//   console.log('Payload in the route:', 'id:', req.params.id, 'user_id:', req.params.user_id)
//   console.log('user_id not from a body at all', req.user.id)
//   let itemID = req.params.id;
//   let userID = req.params.user_id;
//   //you can other compare item user_id from the item to the user that is logged in
//   //or you can only render delete for items that match the logged in user_id 
//   // req.body.user_id is from ITEM table
//   // itemID is from USER table
//   // if the item to delete matches the user logged in's ID, delete.
//   let queryText = '';
//   if (Number(userID) === req.user.id) {
//     queryText = `DELETE FROM item WHERE id = $1;`;
//   } else {
//     console.log('You are not allowed to delete another user\'s item!');
//   }
//   pool.query(queryText, [itemID])
//     .then(() => {
//       res.sendStatus(202); 
//     }).catch((error) => {
//       console.log(error);
//       res.sendStatus(204); // 204 means there was no content to delete
//     });
// });





module.exports = router;
