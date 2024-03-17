import express from 'express'
import images from './api/images'

const routes = express.Router()

routes.get('/', (req, res) => {
    res.status(200).render('index', {
        title: 'Udacity',
        message: 'Image process project',
    })
})

routes.use('/api', images)

export default routes
