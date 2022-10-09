const postController = require('../controllers/commentController.js')

const router = require('express').Router()

router.post('/api/posts/:id1/api/comments', postController.addComment)
router.get('/api/posts/:id1/api/comments', postController.getAllComments)
router.get('/api/posts/:id1/api/comments/:id', postController.getComment)
router.put('/api/posts/:id1/api/comments/:id', postController.updateComment)
router.delete('/api/posts/:id1/api/comments/:id', postController.deleteComment)


module.exports = router