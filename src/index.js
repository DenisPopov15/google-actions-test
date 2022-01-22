'use strict'

require('dotenv').config()

const express = require('express')

const PORT = process.env.PORT
const app = express()

app.post('/', (req, res) => {
  console.log('Yeahh, its working')
  console.log('req!!', req)
  console.log('req!!', JSON.stringify(req))
  res.send('Hello World! 2022')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
