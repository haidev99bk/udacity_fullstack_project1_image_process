import express from 'express'
import routes from './routes'
import path from 'path'
const app = express()
const port = 3000
express.static('public')

app.set('view engine', 'pug')
app.set('views', path.resolve('src', 'views'))

app.use(routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

export default app
