const { Client } = require('pg');
const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Leviettrung123",
    database:"Tan"
})

module.exports = client;