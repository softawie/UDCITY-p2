
// #### Users
// - Index [token required]
// - Show [token required]
// - Create N[token required]
import express, { Request, Response } from 'express'
import {  User , UserStore} from '../models/user'
import jwt from 'jsonwebtoken'
import verifyAuthToken from './AuthToken'
import dotenv from 'dotenv'

dotenv.config()

const { TOKEN_SECERT } = process.env
const store = new UserStore()

const index = async (_req: Request, res: Response) => {
    const users = await store.index()
    res.json(users)
  }
  
  const show = async (req: Request, res: Response) => {
    const user = await store.show(req.body.id)
    res.json(user)
  }
  
  
  const create = async (req: Request, res: Response) => {
    try {
      const user: User = {
          id: req.body.id,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: req.body.password,
      }
    
      const newUser = await store.create(user)
      //@ts-ignore
      const token = jwt.sign({ user: newUser }, TOKEN_SECERT as string);
      res.json(newUser)
    } catch (err) {
      res.status(400)
      res.json(err)
    }
  }
  

const userRoutes = (app: express.Application) => {
    app.get('/users',verifyAuthToken, index)
    app.get('/users/:id',verifyAuthToken, show)
    app.post('/users', create)
}

export default userRoutes;


