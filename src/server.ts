import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import * as productRoutes from './handlers/products'
import * as orderRoutes from './handlers/orders'
import * as userRoutes from './handlers/user'

const app: express.Application = express()
const address: string = '0.0.0.0:3000'

app.use(cors())
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!')
})
// @ts-ignore

productRoutes(app)
// @ts-ignore

orderRoutes(app)
// @ts-ignore

userRoutes(app)

app.listen(3000, function () {
  console.log(`starting app on: ${address}`)
})
