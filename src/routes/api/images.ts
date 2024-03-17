import express from 'express'
import { getResizedImage } from '../../utils/images'

const images = express.Router()

images.get('/images', async (req, res) => {
    try {
        let resizedImage: string | null = ''

        const fileName = req.query?.fileName as string
        const width = Number(req.query?.width)
        const height = Number(req.query?.height)

        if (fileName && width && height) {
            resizedImage = await getResizedImage(fileName, width, height)
        } else {
            throw new Error('Please input correct url')
        }

        res.status(200).sendFile(resizedImage as string)
    } catch (err: unknown) {
        res.status(400).render('error', {
            message: (err as { message?: string })?.message || '',
        })
    }
})

export default images
