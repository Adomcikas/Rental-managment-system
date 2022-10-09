const db = require('../models')

const Review = db.reviews


const addReview= async (req, res) => {
    //let id = req.params.id
    let info = {
        rating: req.body.rating,
        commentId: req.params.id2
    }

    Review.create(info)
    .then(data => {
        res.status(200).send(data)})
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while creating review."
        });
    });
}

const getAllReviews = async (req, res) => {
    let id2 = req.params.id2
    Review.findAll({where: {commentId: id2}})
    .then(data => {
        res.status(200).send(data)})
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while retrieving all reviews."
        });
    });
}

const getReview = async (req, res) => {
    let id = req.params.id
    let id2 = req.params.id2
    Review.findOne({where: {commentId: id2,id: id}})
    .then(data => {
        res.status(200).send(data)})
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while retrieving review."
        });
    });
}

const updateReview = async (req, res) => {
    let id = req.params.id
    let id2 = req.params.id2
    Review.update(req.body, {where: {commentId: id2,id: id}})
    .then(data => {
        res.status(200).send(data)})
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while editing review."
        });
    });
}

const deleteReview = async (req, res) => {
    let id = req.params.id
    let id2 = req.params.id2
    Review.destroy({where: {commentId: id2,id: id}})
    .then(res.status(200).send('review deleted'))
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while deleting review."
        });
    });
}

module.exports = {
    addReview,
    getAllReviews,
    getReview,
    updateReview,
    deleteReview,
}