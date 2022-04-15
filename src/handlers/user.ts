import express, { Request, Response } from 'express'
import { products, productsStore } from '../models/products'

const store = new productsStore()

const authorizationHeader = req.headers.authorization
const token = authorizationHeader.split(' ')[1]





const create = async (req: Request, res: Response) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }


const verifyAuthToken = (req: Request, res: Response, next) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)

        next()
    } catch (error) {
        res.status(401)
    }
}

const userRoutes = (app: express.Application) => {
    // app.get('/users', index)
    // app.get('/users/:id', show)
    app.post('/users', verifyAuthToken, create)
    // app.put('/users/:id', verifyAuthToken, update)
    // app.delete('/users/:id', verifyAuthToken, destroy)
}

export default  userRoutes


