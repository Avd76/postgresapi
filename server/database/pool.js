const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DB,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT
});

module.exports = pool;