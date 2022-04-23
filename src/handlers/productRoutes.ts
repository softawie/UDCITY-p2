
// ## API Endpoints
// #### Products
// - Index 
// - Show
// - Create [token required]
// - [OPTIONAL] Top 5 most popular products 
// - [OPTIONAL] Products by category (args: product category)

import express, { Request, Response } from 'express'
import { Product, ProductStore } from '../models/products'
import verifyAuthToken from './AuthToken'

const store = new ProductStore()

const index = async (_req: Request, res: Response) => {
  try{
    const Products = await store.index()
    res.json(Products)
  }catch(err){
    res.status(400)
    res.json(err)
  }
}

const show = async (req: Request, res: Response) => {
  const Product = await store.show(req.body.id)
  res.json(Product)
}


const create = async (req: Request, res: Response) => {
  try {
    const Product: Product = {
      id: req.body.id,
      name: req.body.name,
      price:req.body.price
    }
  
    const newproduct = await store.create(Product)
    res.json(newproduct)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}



// const destroy = async (req: Request, res: Response) => {
//   const deleted = await store.delete(req.body.id)
//   res.json(deleted)
// }

 const productRoutes = (app: express.Application) => {
  app.get('/products', index)
  app.get('/products/:id', show)
  app.post('/products', create)
}

export default productRoutes



