const userController = require('../controllers/UserController.js')
const auth = require("../Auth/authentication")

const router = require('express').Router()

router.post('/login', userController.login)
router.post('/register', userController.register)
router.get('/logout',auth.authorization,userController.logout)
router.get('/profile',auth.authorization, userController.profile)


module.exports = router