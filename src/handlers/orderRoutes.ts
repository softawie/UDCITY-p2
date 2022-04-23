// #### Orders
// - Current Order by user (args: user id)[token required]
// - [OPTIONAL] Completed Orders by user (args: user id)[token required]

import express, { Request, Response } from 'express'
import { Order, OrderStore } from '../models/orders'
import verifyAuthToken from './AuthToken'

const store = new OrderStore()

const index = async (_req: Request, res: Response) => {
  const order = await store.index()
  res.json(order)
}

const orderRoutes = (app: express.Application) => {
  app.get('/orders/:id', index)
}

export default  orderRoutes


