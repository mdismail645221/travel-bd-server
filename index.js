const express = require('express');
const port = 5000;
const cors = require('cors');

const app = express();
app.use(cors());

const travels = require('./data/bookList.json');
console.log(travels)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/travels', (req, res) => {
  res.send(travels)
})

app.get('/travels/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id)
  const selectedTravels = travels.find(tra => tra.id === id);
  res.send(selectedTravels)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports = app;

