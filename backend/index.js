const connection = require('./db');
const express = require('express')

connection();

const app = express()
const port = 3000
app.use(express.json());
app.get('/papa', (req, res) => {//300 port k papa page pe hello world bhejo 
    
  res.send('Hello World!')
})

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
