import express, { Request, Response } from 'express'
import { products, productsStore } from '../models/products'

const store = new productsStore()

const index = async (_req: Request, res: Response) => {
  const products = await store.index()
  res.json(products)
}

const show = async (req: Request, res: Response) => {
  const product = await store.show(req.body.id)
  res.json(product)


const create = async (req: Request, res: Response) => {
  try {
    const product: products = {
      title: req.body.title,
      content: req.body.content
    }

    const newproduct = await store.create(product)
    res.json(newproduct)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const destroy = async (req: Request, res: Response) => {
  const deleted = await store.delete(req.body.id)
  res.json(deleted)
}

const productRoutes = (app: express.Application) => {
  app.get('/products', index)
  app.get('/products/:id', show)
  app.post('/products', create)
  app.delete('/products', destroy)
}

  export default productRoutes;


