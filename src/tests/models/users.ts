import supertest from 'supertest'
import { User , UserStore } from '../../models/user'
import app from '../../server'

const request = supertest(app)

const store = new UserStore()

describe('Test endpoint response', () => {

  it('users Model index', async () => {
    const result = await store.index()
    expect(result).toBeDefined()
  })

  it('users Model index', async () => {
    //@ts-ignore
    const result = await store.create()
    expect(result).toBeDefined()
  })

  it(' should return index of users', async () => {
    const result = await store.index()
    expect(result).toEqual([])
  })
})