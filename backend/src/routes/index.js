import express, { response } from 'express'
const router = express.Router()

import passport from 'passport'
import '../passport'

import jwt from 'jsonwebtoken'

router.get('/', (req, res) => {
    res.redirect('/api')
})

router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if(err || !user) {
                console.log(err)
                return res.status(400).send({message: 'Incorrect username or password'})
            }
            req.login(user, { session: false }, async (error) => {
                if(error) return next(error)
                const userForToken = { id: user._id, username: user.username}
                const token = jwt.sign(userForToken, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d'})
                res.cookie('token', token, { httpOnly: false })
                return res.json({message: 'Login successful', token, userForToken})
            })
        } catch(error) {
            return next(error)
        }
    }) (req, res, next)

})

router.get('/logout', function(req, res){
    req.logout();
    res.clearCookie('token')
    return res.send('Log out successful')
});
        

    



export default router