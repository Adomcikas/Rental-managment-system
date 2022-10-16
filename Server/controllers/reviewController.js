const db = require('../models')
const { Op } = require("sequelize");

const Review = db.reviews
const Comment = db.comments


const addReview= async (req, res) => {
    //let id = req.params.id
    const PathExists = await Comment.count({where: {postId: req.params.id1, id: req.params.id2}}) > 0;
    if(!PathExists) {
        res.status(404).send({
            message: "Some error occurred while editing comment."
        });
        return;
    }
    let info = {
        rating: req.body.rating,
        commentId: req.params.id2
    }

    Review.create(info)
    .then(data => {
        res.status(201).send(data)})
    .catch(err => {
        res.status(400).send({
            message: err.message && "Some error occurred while creating review."
        });
    });
}

const getAllReviews = async (req, res) => {
    const PathExists = await Comment.count({where: {postId: req.params.id1, id: req.params.id2}}) > 0;
    if(!PathExists) {
        res.status(404).send({
            message: "Some error occurred while editing comment."
        });
        return;
    }
    let id2 = req.params.id2
    Review.findAll({where: {commentId: id2}})
    .then(data => {
        res.status(200).send(data)})
    .catch(err => {
        res.status(500).send({
            message: err.message && "Some error occurred while retrieving all reviews."
        });
    });
}

const getReview = async (req, res) => {
    let id3 = req.params.id3
    let id2 = req.params.id2

    const PathExists = await Comment.count({where: {postId: req.params.id1, id: req.params.id2}}) > 0;
    const PathExists2 = await Review.count({where: {commentId: req.params.id2, id: req.params.id3}}) > 0;
    if(!PathExists || !PathExists2) {
        res.status(404).send({
            message: "Some error occurred while editing comment."
        });
        return;
    }
    
    Review.findOne({
        where: {
            commentId: id2,
            id: id3
    }})
    .then(data => {
        res.status(200).send(data)})
    .catch(err => {
        res.status(500).send({
            message: err.message && "Some error occurred while retrieving review."
        });
    });
}

const updateReview = async (req, res) => {
    let id3 = req.params.id3
    const PathExists = await Comment.count({where: {postId: req.params.id1, id: req.params.id2}}) > 0;
    const PathExists2 = await Review.count({where: {commentId: req.params.id2, id: req.params.id3}}) > 0;
    if(!PathExists || !PathExists2) {
        res.status(404).send({
            message: "Some error occurred while editing comment."
        });
        return;
    }
    Review.update(req.body, {where: {commentId: req.params.id2, id: id3}})
    .then(data => {
        res.status(200).send(data)})
    .catch(err => {
        res.status(400).send({
            message: err.message && "Some error occurred while editing review."
        });
    });
}

const deleteReview = async (req, res) => {
    const PathExists = await Comment.count({where: {postId: req.params.id1, id: req.params.id2}}) > 0;
    const PathExists2 = await Review.count({where: {commentId: req.params.id2, id: req.params.id3}}) > 0;
    if(!PathExists || !PathExists2) {
        res.status(404).send({
            message: "Some error occurred while editing comment."
        });
        return;
    }
    Review.destroy({where: {id: req.params.id3}})
    .then(res.status(204).send('review deleted'))
    .catch(err => {
        res.status(500).send({
            message: err.message && "Some error occurred while deleting review."
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