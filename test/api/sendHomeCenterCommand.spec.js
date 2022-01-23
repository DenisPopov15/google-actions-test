'use strict'

const { expect } = require('chai')
const request    = require('supertest')

describe('HomeCenterCommand', async() => {
  it('sendHomeCenterCommand', async() => {

    const response = await request(global.server)
      .post('/api/sendCommand')
      .set('google-assistant-signature', 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImNhMDA2MjBjNWFhN2JlOGNkMDNhNmYzYzY4NDA2ZTQ1ZTkzYjNjYWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdWQiOiJkZW5pcy1ob21lLXRlc3QiLCJuYmYiOjE2NDI4NDE5NTEsImlhdCI6MTY0Mjg0MjI1MSwiZXhwIjoxNjQyODQyMzcxLCJqdGkiOiJmMmFhNTFhNTQ1Mjg2MTAxZjA4OGRjMjVhYWViNmRhM2YwY2QyMjQ3In0.LQX_qCz3ca_LgeQc7xWoWdp0e4Lr72qMUvLuOwHNPkflxrsl6tF3LlFZXoLYWyvKycAgvRMI_ow_vaFuCjJzb6dEuu55OjNE59OPKwjw5SSBumNuBW5456i4Y95gBq71LYg9ajpq6W6aF2UwVpc7SlDPQo_RqZNnCq-4ScTamLw8If6-USBTbHMshWKu4BDX8vATUHl_iw5eQ0RDjrElaaVBAcBX-mYqOIShyGglOKtsLnt8fqdUGqVBb3rsf3Fhbnl9FV2-2ZNaBeb4TfLmnEibwqFkAXsCCfCjeFOY9t78UKz1udfwDXmB-8rhmNaS5T1S2-LuR3IYl-oMhwKjbA')
      .send({ params: {} })

    expect(response.status).to.be.equal(200)
  })
})
