import supertest from 'supertest'
import {  Product ,ProductStore } from '../../models/products'
import app from '../../server'

const request = supertest(app)

const store = new ProductStore()

describe('Test endpoint response', () => {

  it('Products Model index', async () => {
    const result = await store.index()
    expect(result).toBeDefined()
  })

  it('Products Model index', async () => {
    //@ts-ignore
    const result = await store.create()
    expect(result).toBeDefined()
  })

  it('index should return index of products', async () => {
    const result = await store.index()
    expect(result).toEqual([])
  })
})
