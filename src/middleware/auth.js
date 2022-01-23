'use strict'

const jwt    = require('jsonwebtoken')
const getPem = require('rsa-pem-from-mod-exp')

const assistantServiceJWKPublicKey = {
  e:   'AQAB',
  kty: 'RSA',
  n: 'wsM16HUl8VtOHqW-QT_k4fe67AsHPZfB05aUSIiSdPOBONDrAq7ylsVOzKRVOuCVwwmLTDL3k6fBFRYDMmhmo28AKkD6AtDA9qqkuXAovA0TFeeQ_WDHlpstE-ZgTPyykIyoG0lIMtdaZ7wKAoNv75QhtI_PAjtmJ4lCa_xx258rxr1-E8ZvUlT2I5gh_vLqYpsRuWX6uZ5Dl5SILPJuwBdfD-PIvgBGEDHT2ZpKR_IoxLNZDR7WtR6xCTiqrPj0SbMOOpyN7G28jH_jJfdw-9CD5AbWN7BlDmJU-oKcgUTee9lZLuYIPy1J7LtAac4MnGMGbupmPOQ1jzAaMpStrw'
}

const publicKeyPem = getPem(assistantServiceJWKPublicKey.n, assistantServiceJWKPublicKey.e)

module.exports = app => {
  const handler = async(req, res, next) => {
    try {
      const token = req.headers['google-assistant-signature']
      const decoded = jwt.verify(token, publicKeyPem)
      const { iss, aud } = decoded
      if (iss !== 'https://accounts.google.com' || aud !== 'denis-home-test') {
        const invalidTokenError = new Error('Auth not valid')
        invalidTokenError.httpStatusCode = 401
        next(invalidTokenError)
      }

    } catch (error) {
      error.httpStatusCode = 401
      next(error)
    }

    next()
  }

  return handler
}
