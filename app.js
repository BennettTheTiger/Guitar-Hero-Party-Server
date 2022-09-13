const express = require('express');
require('dotenv').config();
// Using Node.js `require()`
const mongoose = require('mongoose');

const app = express();
const port = 3000;

console.log('connecting to database...');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));

db.on('connected', () => console.log('Successfully connected to database.'))

app.get('/', (req, res) => {
  res.send('Hey there from GH server');
});

app.use(express.json());

const gamesRouter = require('./routes/games');

app.use('/games', gamesRouter);

const trackRouter = require('./routes/tracks');

app.use('/tracks', trackRouter);

const contestantRouter = require('./routes/contestant');

app.use('/contestants', contestantRouter);

app.listen(process.env.PORT, () => {
  console.log(`Guitar Hero Server is up and listening on port ${port}`);
});
