// required packages
const express = require('express');

//variables
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//response if users request not found
app.use((req, res) => {
    res.status(404).end();
});

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

