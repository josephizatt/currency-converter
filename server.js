require('dotenv').config(); // read .env files
const express = require('express');

// app as an instance of express
const app = express();
// node environment variable for port or 3000
const port = process.env.PORT || 3000;

// Set public folder as root
app.use(express.static('public'));

// Allow front-end to access node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Listen for HTTP requests on port 3000
app.listen(port, () => {
    console.log('listening on %d', port);
});