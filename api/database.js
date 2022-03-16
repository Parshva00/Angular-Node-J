const Pool = require('pg').Pool;

const pool = new Pool ({
    host : "localhost",
    user : "postgres",
    port : 5432,
    password: "admin",
    database : "postgres"
})

module.exports = pool;

// client.connect();

// client.query(` Select * from public.user`, (err, res) => {
//     if (!err) {
//         console.log(res.rows);
//     }
//     else {
//         console.log(err.message);
//     }
//     client.end;
// });

