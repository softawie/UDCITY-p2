import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const { PEPPER, SALT_ROUNDS } = process.env;

const verifyAuthToken = (req: Request, res: Response, next: () => void) => {
    try {
        //@ts-ignore
        const authorizationHeader:string = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string)

        next()
    } catch (error) {
        res.status(401)
    }
}

export default verifyAuthToken