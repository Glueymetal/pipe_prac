const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Pipeline practice app'));

app.get('/status', (req, res) => {
  res.json({ status: 'OK', version: 'v2' });
});

module.exports = app;
