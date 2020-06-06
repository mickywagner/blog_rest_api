import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/api')
})

router.post('/login', (req, res) => {
    // Authenticate user with passportJS

    // Create a JWT web token
})

export default router