const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
let koalaArray = [

];

// GET
koalaRouter.get('/', (req, res) => {
    console.log('GET Request made for /quotes');
    // Send back the list of quotes!
    res.send(koalaArray);
});

// POST
 koalaRouter.post('/', (req, res) => {
    console.log('POST REquest made for /');
    console.log(req.body);
    let koalaToAdd = req.body;
    koalaArray.push(koalaToAdd);
    res.sendStatus(201); 
 })

// PUT



// DELETE
// koalaRouter.delete('/'), (req, res) => {
//     console.log(req.params);
//     //koalaArray = koalaArray.filter((koala,index)=> index != req.params.id);
//      res.sendStatus(200)
// };
module.exports = koalaRouter;