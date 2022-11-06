const postController = require('../controllers/postController.js')
const auth = require("../Auth/authentication")

const router = require('express').Router()

router.post('/',auth.authorization, postController.addPost)
router.get('/', postController.getAllposts)
router.get('/:id', postController.getPost)
router.put('/:id',auth.authorization, postController.updatePost)
router.delete('/:id',auth.authorization, postController.deletePost)


module.exports = router