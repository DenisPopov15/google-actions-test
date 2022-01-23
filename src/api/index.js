'use strict'

const express = require('express')
const sendHomeCenterCommand = require('./sendHomeCenterCommand')
const router = express.Router()

router.route('/sendCommand').post(sendHomeCenterCommand)

module.exports = router
