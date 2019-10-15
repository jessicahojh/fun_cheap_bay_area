const express = require('express');

const app = express();

app.get('/', (req, res) => 
    res.json({ msg: "Welcome to Fun Cheap Bay Area"}));

// Define routes
// app.use('/api/events', require('./routes/events'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));