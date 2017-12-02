const express = require('express');
const app = express();
const multer = require('multer');

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(process.env.PORT || 8080, () => console.log('Server open'));
