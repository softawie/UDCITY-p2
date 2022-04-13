import supertest from 'supertest'
import { Weapon, MythicalWeaponStore } from '../models/products'

// create a request object
// const request = supertest(app)

const store = new MythicalWeaponStore()

describe('Test endpoint response', () => {
  // it('test hello world endpoint', async () => {
  //   const response = await request.get('/')
  //   expect(response.status).toBe(200)
  // })

  it('Mythical Weapon Model', async () => {
    const result = await store.index()
    expect(result).toBeDefined()
  })

  it('index should return index of products', async () => {
    const result = await store.index()
    expect(result).toEqual([])
  })
})
