import Client from '../database'

export type products = {
  id: Number
  name: string
  type: string
  weight: number
}

export class productsStore {
  async index(): Promise<products[]> {
    try {
      const conn = await Client.connect()
      const sql = 'Select * Form products'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`cannot get products ${err}`)
    }
  }
}
