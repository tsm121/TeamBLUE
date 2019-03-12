'use strict';

const express = require('express');
const path = require('path');

const app = express();

const buildDir = 'dist';
const appDir = 'src';

const indexFile = path.join(__dirname, buildDir, 'index.html');
const isProd = process.env.NODE_ENV === 'production';

app.use(express.static(path.join(__dirname, buildDir)));

// Catch all error handler
app.use((err, req, res, next) => {
  if (!isProd) {
    console.error(err);
  }
  res.status(500).send('500 - Internal Server Error');
});

app.get('*', (req, res) => {
  res.sendFile(indexFile);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('Express server running at localhost:' + PORT);
});
