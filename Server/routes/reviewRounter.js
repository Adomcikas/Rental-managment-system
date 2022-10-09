const postController = require('../controllers/reviewController.js')

const router = require('express').Router()

router.post('/api/posts/:id1/api/comments/:id2/api/reviews/', postController.addReview)
router.get('/api/posts/:id1/api/comments/:id2/api/reviews/', postController.getAllReviews)
router.get('/api/posts/:id1/api/comments/:id2/api/reviews/:id', postController.getReview)
router.put('/api/posts/:id1/api/comments/:id2/api/reviews/:id', postController.updateReview)
router.delete('/api/posts/:id1/api/comments/:id2/api/reviews/:id', postController.deleteReview)


module.exports = router