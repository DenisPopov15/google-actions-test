'use strict'

require('dotenv').config()

const express = require('express')

const PORT = process.env.PORT
const app = express()


const authMiddleware = (req) => {
  const jwt    = require('jsonwebtoken')
  const getPem = require('rsa-pem-from-mod-exp')

  const assistantServiceJWKPublicKey = {
    e:   'AQAB',
    kty: 'RSA',
    n: 'wsM16HUl8VtOHqW-QT_k4fe67AsHPZfB05aUSIiSdPOBONDrAq7ylsVOzKRVOuCVwwmLTDL3k6fBFRYDMmhmo28AKkD6AtDA9qqkuXAovA0TFeeQ_WDHlpstE-ZgTPyykIyoG0lIMtdaZ7wKAoNv75QhtI_PAjtmJ4lCa_xx258rxr1-E8ZvUlT2I5gh_vLqYpsRuWX6uZ5Dl5SILPJuwBdfD-PIvgBGEDHT2ZpKR_IoxLNZDR7WtR6xCTiqrPj0SbMOOpyN7G28jH_jJfdw-9CD5AbWN7BlDmJU-oKcgUTee9lZLuYIPy1J7LtAac4MnGMGbupmPOQ1jzAaMpStrw'
  }

  const pem = getPem(assistantServiceJWKPublicKey.n, assistantServiceJWKPublicKey.e)

  const token = req.headers['google-assistant-signature']
  const decoded = jwt.verify(token, pem)
  const { iss, aud } = decoded
  if (iss !== 'https://accounts.google.com' || aud !== 'denis-home-test') {
    throw Error('Auth not valid')
  }
}

app.post('/', (req, res) => {
  authMiddleware(req)
  console.log('Yeahh, its working')

  res.send('Hello World! 2022')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
