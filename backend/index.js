const connection = require('./db');
const express = require('express')
var cors = require('cors')


connection();

const app = express()
const port = 5000
app.use(cors())
app.use(express.json())

app.get('/home', (req, res) => {//300 port k papa page pe hello world bhejo 
     
  res.send('Hello World!')
})

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.use('/api/scheduler',require('./routes/scheduler'))
app.listen(port, () => {
  console.log(`NOTES APPLICATION  BACKEND LISTENING ON PORT  ${port}`)
})
