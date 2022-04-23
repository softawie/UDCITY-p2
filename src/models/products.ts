import Client from '../database'

// #### Product
// -  id
// - name
// - price
// - [OPTIONAL] category

export type Product = {
  id: Number
  name: string
  price: Number
}

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const conn = await Client.connect()
      const sql = 'Select * FROM products;'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`cannot get product ${err}`)
    }
  }

  async show(id: string): Promise<Product> {
    try {
        const sql = 'SELECT * FROM products WHERE id=($1)'
        // @ts-ignore
        const conn = await Client.connect()

        const result = await conn.query(sql, [id])

        conn.release()

        return result.rows[0]
    } catch (err) {
        throw new Error(`Could not get article ${id}. Error: ${err}`)
    }
  }

  async create(product: Product): Promise<Product> {
    try {
        const sql = 'INSERT INTO products (name, price) VALUES($1, $2) RETURNING *'
        // @ts-ignore
        const conn = await Client.connect()
        // @ts-ignore

        const result = await conn.query(sql, [product.name, product.price])
        // @ts-ignore

        conn.release()

        return result.rows[0] 
    } catch (err) {
        throw new Error(`Could not add product ${name}. Error: ${err}`)
    }
  }

  // async delete(id: string): Promise<article> {
  //   try {
  //     const sql = 'DELETE FROM articles WHERE id=($1)'
  //       // @ts-ignore
  //       const conn = await Client.connect()

  //       const result = await conn.query(sql, [id])

  //       const article = result.rows[0]

  //       conn.release()

  //       return article  
  //   } catch (err) {
  //       throw new Error(`Could not delete article ${title}. Error: ${err}`)
  //   }
  // }
}
