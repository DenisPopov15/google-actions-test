'use strict'

require('dotenv').config()

const express = require('express')

const PORT = process.env.PORT
const app = express()

app.post('/', (req, res) => {
  console.log('Yeahh, its working')
  res.send('Hello World! 2022')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
