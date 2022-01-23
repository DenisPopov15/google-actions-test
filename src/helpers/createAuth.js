'use strict'

const jwt = require('jsonwebtoken')
const DEFAULT_EXP_IN_SECONDS = 60
const { SERVICE_PRIVATE_KEY } = process.env

const createAuth = () => {
  const now = Math.floor(Date.now() / 1000)
  const expiresAt = now + DEFAULT_EXP_IN_SECONDS

  const payload = {
    iss: 'assistant-processor',
    aud: 'home-command-center',
    exp: expiresAt,
  }

  const token = jwt.sign(payload, SERVICE_PRIVATE_KEY)

  return token
}

module.exports = createAuth