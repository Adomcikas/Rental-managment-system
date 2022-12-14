const postController = require('../controllers/reviewController.js')
const auth = require("../Auth/authentication")

const router = require('express').Router()

router.post('/api/posts/:id1/api/comments/:id2/api/reviews/',auth.authorization, postController.addReview)
router.get('/api/posts/:id1/api/comments/:id2/api/reviews/', postController.getAllReviews)
router.get('/api/posts/:id1/api/comments/:id2/api/reviews/:id3', postController.getReview)
router.put('/api/posts/:id1/api/comments/:id2/api/reviews/:id3',auth.authorization, postController.updateReview)
router.delete('/api/posts/:id1/api/comments/:id2/api/reviews/:id3',auth.authorization, postController.deleteReview)


module.exports = router