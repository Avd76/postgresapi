const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'KQTLOP23',
    database: 'todo_database',
    host: 'localhost',
    port: 5432
})

module.exports = pool;