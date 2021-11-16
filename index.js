const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 3005;

app.use(morgan('tiny'));
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
  res.send({'id':'Hello World!'})
});

app.get('/users', (req, res, next) => {
    res.json({'id': 1, 'name': 'lip2'});
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});



