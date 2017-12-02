const express = require('express');
const multer = require('multer');
const upload = multer();
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', upload.single('file'), (req, res) => {
  res.json({ size: req.file.size });
});

app.listen(process.env.PORT || 8080, () => console.log('Server open'));
