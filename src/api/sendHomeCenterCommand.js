'use strict'

const fetch      = require('node-fetch')
const createAuth = require('../helpers/createAuth')
const { HOME_CENTER_URL } = process.env

const sendHomeCenterCommand = async(req, res) => {
  const auth = createAuth()
  const command = {}
  const params = {
    method:  'post',
    body:    JSON.stringify({ command }),
    headers: { 'Content-Type': 'application/json', auth }
  }

  console.log('auth!!', auth)
  const response = await fetch(HOME_CENTER_URL, params)
  const data = await response.json()

  res.status(200).json({ status: 'OK' })
}

module.exports = sendHomeCenterCommand