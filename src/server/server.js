const cors = require('cors');

const express = require('express')
const app = express()
app.use(cors());
const port = 3001

app.post('/', (req, res) => {
    console.log('req===========', req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})