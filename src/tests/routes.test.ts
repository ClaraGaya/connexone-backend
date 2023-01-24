import supertest from 'supertest'
import { beforeAll, afterAll, it, describe, expect } from '@jest/globals'
import app from '../app'
import Ajv from 'ajv'
import * as timeSchema from '../models/timeSchema.json'

const ajv = new Ajv()

const request = supertest(app)
let server

beforeAll(async () => {
  server = app.listen(8080, () => console.log(`Listening on port: ${8080}`))
})

afterAll(done => {
  // allow Jest to exit successfully.
  console.log('closing...')
  server.close()
  done()
})

describe('test endpoints exists', () => {
  it('GET /healthcheck endpoint exists', async () => {
    const res = await request.get('/healthcheck')
    expect(res.statusCode).toBe(200)
  })
  it('GET /metrics endpoint exists', async () => {
    const res = await request.get('/metrics')
    expect(res.statusCode).toBe(200)
  })
  it('GET /time endpoint exists', async () => {
    const res = await request.get('/time')
    expect(res.statusCode).toBe(200)
  })
})

const schema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      fullname: {
        type: 'string',
        minLength: 2
      }
    }
  }
}

describe('GET /time', () => {
  it('matches the JSON schema', async () => {
    const isDataValid = ajv.validate(schema, [{ fullname: 'ab' }])
    expect(isDataValid).toBeTruthy()
  })
})

describe('GET /time', () => {
  it('matches the JSON schema', async () => {
    const res = await request.get('/metrics')
    const isDataValid = ajv.validate(timeSchema, res)
    expect(isDataValid).toBeTruthy()
  })
})


