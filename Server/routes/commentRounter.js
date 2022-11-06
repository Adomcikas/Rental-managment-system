const postController = require('../controllers/commentController.js')
const auth = require("../Auth/authentication")

const router = require('express').Router()

router.post('/api/posts/:id1/api/comments',auth.authorization, postController.addComment)
router.get('/api/posts/:id1/api/comments', postController.getAllComments)
router.get('/api/posts/:id1/api/comments/:id', postController.getComment)
router.put('/api/posts/:id1/api/comments/:id',auth.authorization, postController.updateComment)
router.delete('/api/posts/:id1/api/comments/:id',auth.authorization, postController.deleteComment)


module.exports = router