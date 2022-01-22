'use strict'

require('dotenv').config()

const express = require('express')

const PORT = process.env.PORT
const app = express()


const authMiddleware = (req) => {
  const jwt    = require('jsonwebtoken')
  const getPem = require('rsa-pem-from-mod-exp')

  const assistantServicePublicKey = {
    e:   'AQAB',
    kty: 'RSA',
    n: 'wsM16HUl8VtOHqW-QT_k4fe67AsHPZfB05aUSIiSdPOBONDrAq7ylsVOzKRVOuCVwwmLTDL3k6fBFRYDMmhmo28AKkD6AtDA9qqkuXAovA0TFeeQ_WDHlpstE-ZgTPyykIyoG0lIMtdaZ7wKAoNv75QhtI_PAjtmJ4lCa_xx258rxr1-E8ZvUlT2I5gh_vLqYpsRuWX6uZ5Dl5SILPJuwBdfD-PIvgBGEDHT2ZpKR_IoxLNZDR7WtR6xCTiqrPj0SbMOOpyN7G28jH_jJfdw-9CD5AbWN7BlDmJU-oKcgUTee9lZLuYIPy1J7LtAac4MnGMGbupmPOQ1jzAaMpStrw'
  }

  const pem = getPem(assistantServicePublicKey.n, assistantServicePublicKey.e)

  const token = req.headers['google-assistant-signature']
  const decoded = jwt.verify(token, pem)
  console.log('decoded', decoded)
}

app.post('/', (req, res) => {
  console.log('Yeahh, its working')
  authMiddleware(req)

  res.send('Hello World! 2022')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
