
// #### User
// - id
// - firstName
// - lastName
// - password
import Client from '../database'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

export type User = {
    id:Number
    firstName:String
    lastName:String
    password:String
}
dotenv.config()
const { PEPPER, SALT_ROUNDS } = process.env;

export class UserStore {
    async index(): Promise<User[]> {
      try {
        const conn = await Client.connect()
        const sql = 'Select * Form users'
        const result = await conn.query(sql)
        conn.release()
        return result.rows
      } catch (err) {
        throw new Error(`cannot get user ${err}`)
      }
    }
  
    async show(id: string): Promise<User> {
      try {
          const sql = 'SELECT * FROM users WHERE id=($1)'
          // @ts-ignore
          const conn = await Client.connect()
  
          const result = await conn.query(sql, [id])
  
          conn.release()
  
          return result.rows[0]
      } catch (err) {
          throw new Error(`Could not get user ${id}. Error: ${err}`)
      }
    }
  
async create(u: User): Promise<User> {
    try {
      // @ts-ignore
      const conn = await Client.connect()
      const sql = 'INSERT INTO users (first-name,last-name,password_digest) VALUES($1, $2) RETURNING *'
      const hash = bcrypt.hashSync(
             //@ts-ignore
        u.password + PEPPER,parseInt(SALT_ROUNDS)
      );

      const result = await conn.query(sql, [u.firstName,u.lastName, hash])
      const user = result.rows[0]

      conn.release()

      return user
    } catch(err) {
      throw new Error(`unable create user (${u.firstName}): ${err}`)
    } 
  }
}