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

  console.log('url', HOME_CENTER_URL)
  const response = await fetch(HOME_CENTER_URL, params)
  const data = await response.json()
  console.log('data', data)

  res.status(200).json({ status: 'OK' })
}

module.exports = sendHomeCenterCommand