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
      const createdDreamId = result.rows[0].id
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
    `SELECT TO_CHAR(date, 'mm-dd-yyyy'), dream.title, dream.image, dream.details, genre.name, dream.id FROM dream_genre
    JOIN dream ON dream.id = dream_genre.dream_id
    JOIN genre ON dream_genre.genre_id = genre.id
    WHERE dream.id = $1`
    
  pool.query(queryText, [id])
    .then((result) => {
    console.log('POST This is the dream you\'ve selected: ', result.rows);
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
      WHERE id = $7`;
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
      console.log('RESULT: ', result)
      const updatedDreamID = result.rows[0].id
      const updatedDreamQuery = `
        UPDATE "dream_genre" SET ("dream_id", "genre_id")
        VALUES  ($1, $2);`;
      pool.query(updatedDreamQuery, [updatedDreamID, req.body.genre_id])
    })
    .then(result => {
      console.log('DREAM PUT ROUTE AFTER GOING TO DB', result);
      res.sendStatus(201); //do 201 
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});






// router.put('/', rejectUnauthenticated, (req, res) => {
//   console.log('made it to the dream PUT route')
//   console.log(req.body)
//   let id = req.user.id;
//   let queryText = `
//       UPDATE "dream" SET ("title", "date", "image", "details", "user_id", "genre_id")
//       VALUES ($1, $2, $3, $4, $5, $6)
//       RETURNING "id";`;
//   pool.query(queryText, [req.body.title, req.body.date, req.body.image, req.body.details, id, req.body.genre_id])
//     .then((result) => {
//       console.log('RESULT: ', result)
//       const newcreatedDreamId = result.rows[0].id
//       const newdreamGenreQuery = `
//         UPDATE "dream_genre" SET ("dream_id", "genre_id")
//         VALUES  ($1, $2);`;
//       pool.query(newdreamGenreQuery, [newcreatedDreamId, req.body.genre_id])
//     })
//     .then(result => {
//       console.log('DREAM PUT ROUTE AFTER GOING TO DB', result);
//       res.sendStatus(201); //do 201 
//     }).catch((error) => {
//       console.log(error);
//       res.sendStatus(500);
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
//       res.sendStatus(202); //do 201 because 202 means created //200 means deleted  200 = Okay, 202 = Aceepted
//     }).catch((error) => {
//       console.log(error);
//       res.sendStatus(204); // do 204 becuase it means there was no content to delete
//     });
// });






module.exports = router;
