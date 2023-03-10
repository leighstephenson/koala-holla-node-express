const express = require('express');
const koalaRouter = express.Router();
const pool = require("../modules/pool");
//^ brings out pool from the module into our router


// DB CONNECTION
let koalaArray = [];

 // GET

koalaRouter.get('/', (req, res) => {
    console.log('GET Request hello');
    // Send back the list of quotes!
    let queryText = 'SELECT * FROM "koalas";';
    pool.query(queryText).then((result) => {

       //result.rows is the Array of data from our database
       console.log(result);
       res.send(result.rows);
    }).catch ((error) => {
        console.log(`Error in GET ${error}`); //need this otherwise we won't know what error is happening
        res.sendStatus(500); //tells client something went wrong
    });
});

// POST

// koalaRouter.post('/', (req, res) => {
//     console.log('POST /inventory');
//     const queryString = 'INSERT INTO koalas (name, gender, age, ready_to_transfer, notes) VALUES ($1, $2, $3, $4, $5);';
//     let values = [req.body.name, req.body.gender, req.body.age, req.body.ready_to_transfer, req.body.notes];
//     pool.query(queryString, values)
//     .then(result => {
//         res.sendStatus(201);
//     }).catch(error => {
//         console.log(error);
//         res.sendStatus(500);
//     })
// })

 koalaRouter.post('/', (req, res) => {
    console.log('POST Request made for /');
    console.log(req.body);
    let koalaToAdd = req.body;
    let queryText = `INSERT INTO koalas (name, gender, age, ready_to_transfer, notes)
    VALUES ($1, $2, $3, $4, $5);`;
    let values = [koalaToAdd.name, koalaToAdd.gender, koalaToAdd.age, koalaToAdd.ready_to_transfer, koalaToAdd.notes]
pool.query(queryText, values).then ((result) => {
res.sendStatus(201);
}).catch((error) => {
console.log(`Error in POST ${error}`);
res.sendStatus(500);
})
})

// PUT

koalaRouter.put('/:id', (req, res) => {
    console.log(`In PUT request`);
    let koalaId = req.params.id;
    let koalaToEdit = req.params.body;
    let queryText = 'UPDATE "koalas" SET "id" = $1, "name" = $2, "gender" = $3, "age" = $4, "ready_to_transfer" = $5, "notes" = $6 ';
    pool.query(queryText, [koalaToEdit.id, koalaToEdit.name,koalaToEdit.gender,koalaToEdit.age, koalaToEdit.ready_to_transfer, koalaToEdit.notes]).then ((result) =>{
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in PUT ${error}`);
        res.sendStatus(500);
    });
});


// DELETE
koalaRouter.delete( '/:id', (req, res) => {
    const deleteIndex = Number( req.params.id );
    let queryText = `DELETE FROM "koalas" WHERE "id" = $1`;
    pool.query(queryText, [deleteIndex]).then((result) => {
    res.sendStatus(200);
}).catch((error) => {
    console.log(`Error in DELETE ${error}`)
    res.sendStatus(500);
});
});
module.exports = koalaRouter;