import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import  {productRoutes,orderRoutes} from './handlers'


const app: express.Application = express()
const address: string = '0.0.0.0:3000'

app.use(cors())
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
  res.send('Hello My Store!')
})
// @ts-ignore

productRoutes(app)
// @ts-ignore

// orderRoutes(app)
// // @ts-ignore

// userRoutes(app)

app.listen(3000, function () {
  console.log(`starting app on: ${address}`)
})

export default app