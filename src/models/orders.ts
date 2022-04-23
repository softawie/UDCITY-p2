// #### Orders
// - id
// - id of each product in the order
// - quantity of each product in the order
// - user_id
// - status of order (active or complete)
import Client from '../database'

export type Order = {
    id: number
    userID: number
    quantity:number
    Status: string
}

export class OrderStore {
    async index(): Promise<Order[]> {
      try {
        const conn = await Client.connect()
        const sql = 'Select * FROM orders'
        const result = await conn.query(sql)
        conn.release()
        return result.rows
      } catch (err) {
        throw new Error(`cannot get order ${err}`)
      }
    }
}

