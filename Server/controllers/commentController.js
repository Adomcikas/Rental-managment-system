const db = require('../models')

const Comment = db.comments


const addComment = async (req, res) => {
    let info = {
        description: req.body.description,
        postId: req.params.id2
    }

    Comment.create(info)
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while creating comment."
        });
    });

}

const getAllComments = async (req, res) => {
    Comment.findAll({where: {postID: req.params.id1}})
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while retreiving all comments."
        });
    });
}

const getComment = async (req, res) => {
    let id1 = req.params.id1
    let id = req.params.id
    Comment.findOne({where: {postId: id1, id: id}})
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while retrieving comment."
        });
    });
}

const updateComment = async (req, res) => {
    let id1 = req.params.id1
    let id = req.params.id

    Comment.update(req.body, {where: {postId: id1, id: id}})
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while editing comment."
        });
    });
}

const deleteComment = async (req, res) => {
    let id1 = req.params.id1
    let id = req.params.id

    Comment.destroy({where: {postId: id1, id: id}})
    .then(res.status(200).send('Deleted comment'))
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while deleting comment."
        });
    });
}

module.exports = {
    addComment,
    getAllComments,
    getComment,
    updateComment,
    deleteComment,
}