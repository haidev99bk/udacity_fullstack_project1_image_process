import { getResizedImage } from '../../utils/images'

describe('Test utils', function () {
    it('Test getResizedImage', async function () {
        const res = await getResizedImage('imageA', 200, 200)
        expect(res).not.toBeNull()
    })
})
