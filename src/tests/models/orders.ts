import supertest from 'supertest'
import { Order , OrderStore } from '../../models/orders'
import app from '../../server'

const request = supertest(app)

const store = new OrderStore()

describe('Test index response', () => {

  it('orders Model index', async () => {
    const result = await store.index()
    expect(result).toBeDefined()
  })

})