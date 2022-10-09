const postController = require('../controllers/postController.js')

const router = require('express').Router()

router.post('/', postController.addPost)
router.get('/', postController.getAllposts)
router.get('/:id', postController.getPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)


module.exports = router