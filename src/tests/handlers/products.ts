import supertest from 'supertest'
import {  Product ,ProductStore } from '../../models/products'
import app from '../../server'

// create a request object
const request = supertest(app)

const store = new ProductStore()

describe('Test endpoint response', () => {
  it('test hello world endpoint', async () => {
    const response = await request.get('/products')
    expect(response.status).toBe(200)
  })

  it('test products with id endpoint', async () => {
    const response = await request.get('/products/1')
    expect(response.status).toBe(200)
  })


})
