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




// ---------------------------- GET ALL DREAMS ----------------------------

router.get('/', rejectUnauthenticated, (req, res) => {
let sqlText =
    `SELECT TO_CHAR(date, 'mm-dd-yyyy'), dream.title, dream.image, dream.details, genre.name, dream.id FROM "user"
    JOIN dream ON dream.user_id = "user".id
    JOIN genre ON genre.id = dream.genre_id
    WHERE "user".id = $1;`
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
    .then((result) => {
    console.log('RESULT: ', result)
    const createdDreamId = result.rows[0].id // dream_id 
    const dreamGenreQuery = `
      INSERT INTO "dream_genre" ("dream_id", "genre_id")
      VALUES  ($1, $2);`;
      pool.query(dreamGenreQuery, [createdDreamId, req.body.genre_id])
    })
    .then(result => {
      res.sendStatus(201); //do 201 
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});





// ---------------------------- GET one dream by ID----------------------------
router.get('/:id', rejectUnauthenticated, (req, res) => {
    let id = req.params.id;
  // console.log('--- This is the ID of the dream you clicked on: ',id);
  const queryText =
    `SELECT TO_CHAR(date, 'mm-dd-yyyy'), dream.title, dream.image, dream.details, dream.genre_id, genre.name, dream.id FROM dream_genre
    JOIN dream ON dream.id = dream_genre.dream_id
    JOIN genre ON dream_genre.genre_id = genre.id
    WHERE dream.id = $1`
    
  pool.query(queryText, [id])
    .then((result) => {
    // console.log('GET This is the dream you\'ve selected: ', result.rows); // WORKING
    res.send(result.rows);
  })
    .catch((error) => {
    console.log('Error inside GET ID route:', error);
    res.sendStatus(500);
  });
});






// ---------------------------- PUT route to update specific dream ----------------------------
router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('ROUTER PUT: This is the dream you are trying to update ROUTER: ', req.body); // not coming through
  console.log('ROUTER PUT: This is the user\'s information:', req.user) // OK 
  let dreamID = req.params.id;
  let userID = req.user.id;

  console.log('ROUTER PUT: ID of the dream you are updating: ', dreamID);
  console.log('ROUTER PUT: user ID:', userID);
  let queryText =
    `UPDATE "dream" SET 
      "title" = $1, 
      "date" = $2, 
      "image" = $3, 
      "details" = $4,
      "user_id" = $5, 
      "genre_id" = $6 
      WHERE id = $7
      RETURNING dream.id;`;
                                // OK THIS QUERY IS WORKING, tested it ON POSTMAN
  pool.query
      (queryText, 
      [
      req.body.dreamDetails.title, 
      req.body.dreamDetails.to_char,
      req.body.dreamDetails.image,
      req.body.dreamDetails.details,
      userID,
      req.body.dreamDetails.genre_id,
      dreamID
    ])
     .then((result) => {
      console.log('JUNCTION RESULT: ', result)
      console.log('JUNCTION RESULT.ROWS: ', result.rows); //
      // const createdDreamId = result.rows[0].id 
      const updatedDreamQuery = `
        UPDATE "dream_genre"
        SET "genre_id" = $1
        WHERE dream_id = $2;
      `; // this query is working, tested it inside POSTICO
      pool.query(updatedDreamQuery, [req.body.dreamDetails.genre_id, dreamID])
    })
    .then(result => {
      console.log('DREAM UPDATED AND BACK FROM DB');
      res.sendStatus(201); //do 201 
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});













// ---------------------------- DELETE route to delete specific dream ----------------------------

// router.delete('/:id', rejectUnauthenticated, (req, res) => {
//   console.log('ROUTER DELETE: This is the dream you are trying to delete: ', req.body); // not coming through
//   console.log('ROUTER DELETE: This is the user\'s information:', req.user) // OK 
//   let dreamID = req.params.id;
//   let userID = req.user.id;

//   console.log('ROUTER DELETE: ID of the dream you are updating: ', dreamID);
//   console.log('ROUTER DELETE: user ID:', userID);
//   let queryText =
//     `DELETE FROM "dream"
//     WHERE id = $1;`;
//   // OK THIS QUERY IS WORKING, tested it ON POSTMAN
//   pool.query(queryText,
//       [
//         req.body.dreamDetails.title,
//         req.body.dreamDetails.to_char,
//         req.body.dreamDetails.image,
//         req.body.dreamDetails.details,
//         userID,
//         req.body.dreamDetails.genre_id,
//         dreamID
//       ])
//     .then((result) => {
//       console.log('JUNCTION RESULT: ', result)
//       console.log('JUNCTION RESULT.ROWS: ', result.rows); //
//       // const createdDreamId = result.rows[0].id 
//       const updatedDreamQuery = `
//         UPDATE "dream_genre"
//         SET "genre_id" = $1
//         WHERE dream_id = $2;
//       `; // this query is working, tested it inside POSTICO
//       pool.query(updatedDreamQuery, [req.body.dreamDetails.genre_id, dreamID])
//     })
//     .then(result => {
//       console.log('DREAM UPDATED AND BACK FROM DB');
//       res.sendStatus(201); //do 201 
//     }).catch((error) => {
//       console.log(error);
//       res.sendStatus(500);
//     });
// });



router.delete('/:id', rejectUnauthenticated, (req, res) => {
  let id = req.params.id
  console.log('ID of dream to delete', id);
  const sqlText = 'DELETE FROM "dream" WHERE id=$1';
  pool.query(sqlText, [id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error completing DELETE query', err);
      res.sendStatus(500);
    });
});



module.exports = router;
