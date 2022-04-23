import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const verifyAuthToken = (req: Request, res: Response, next: () => void) => {
    try {
        //@ts-ignore
        const authorizationHeader:string = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token as string, process.env.TOKEN_SECRET as string )

        next()
    } catch (error) {
        res.status(401)
    }
}


export default verifyAuthToken