const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('server started');
});

app.get('/', (req, res) => {
  res.sendFile('./home.html',{root: __dirname})
});
