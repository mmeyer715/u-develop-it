// required packages
const express = require('express');
const mysql = require('mysql2');

// variables
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connecting to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Zach_0816!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// response if users request not found
app.use((req, res) => {
    res.status(404).end();
});

// GET a single candidate
db.query(`Select * FROM candidates WHERE id=1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

// delete candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, results) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(results);
// });

// testing server connection
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

//starting server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

