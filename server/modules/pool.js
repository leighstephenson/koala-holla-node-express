const pg = require('pg'); //need to have when using pg

//setup pg to allow for database connections
const pool = new pg.Pool({
    //name of the database here
    database: 'koalas',
    //our database is on our computer for now
    host: 'localhost', 
    //port number here
    port: 5432,
}); 

module.exports = pool;