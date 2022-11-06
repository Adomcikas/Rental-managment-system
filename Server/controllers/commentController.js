const db = require('../models')

const Comment = db.comments
const Post = db.posts


const addComment = async (req, res) => {
    if (req.user.role != "User" && req.user.role != "Admin") {
        res.status(403).send({
            message: "Page access is restricted."
        });
        return;
    }
    const postExists = await Post.count({where: {id: req.params.id1}}) > 0;
    if(!postExists) {
        res.status(404).send({
            message: "Some error occurred while editing comment."
        });
        return;
    }
    let info = {
        description: req.body.description,
        postId: req.params.id1,
        userId: req.user.id
    }

    Comment.create(info)
    .then(data => {
        res.status(201).send(data)
    })
    .catch(err => {
        res.status(400).send({
            message: err.message && "Some error occurred while creating comment."
        });
    });

}

const getAllComments = async (req, res) => {
    const postExists = await Post.count({where: {id: req.params.id1}}) > 0;
    if(!postExists) {
        res.status(404).send({
            message: "Some error occurred while editing comment."
        });
        return;
    }
    Comment.findAll({where: {postID: req.params.id1}})
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message && "Some error occurred while retreiving all comments."
        });
    });
}

const getComment = async (req, res) => {
    let id1 = req.params.id1
    let id = req.params.id
    Comment.findOne({where: {postId: id1, id: id}})
    .then(data => {
        if(data == null)
        {
            res.status(404).send("Some error occurred while retrieving comment.")
            return;
        }
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message && "Some error occurred while retrieving comment."
        });
    });
}

const updateComment = async (req, res) => {
    if (req.user.role != "User" && req.user.role != "Admin") {
        res.status(403).send({
            message: "Page access is restricted."
        });
        return;
    }
    let id2 = req.params.id1
    let id1 = req.params.id
    const CommentExists = await Comment.count({where: {postId: id2, id: id1,userId:req.user.id}}) > 0;
    if(!CommentExists) {
        res.status(404).send({
            message: "Some error occurred while editing comment."
        });
        return;
    }

    Comment.update(req.body, {where: {postId: id2, id: id1}})
    .then(data => {
        if(data == 0 || data == null)
        {
            res.status(404).send({message: err.message && "Some error occurred while editing comment."})
            return;
        }
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(400).send({
            message: err.message && "Some error occurred while editing comment."
        });
    });
}

const deleteComment = async (req, res) => {
    if (req.user.role != "User" && req.user.role != "Admin") {
        res.status(403).send({
            message: "Page access is restricted."
        });
        return;
    }
    let id2 = req.params.id1
    let id1 = req.params.id

    const CommentExists = await Comment.count({where: {postId: id2, id: id1}}) > 0;
    if(!CommentExists) {
        res.status(404).send({
            message: "Some error occurred while editing comment."
        });
        return;
    }
    if (req.user.role == "User") {
        Comment.destroy({where: {postId: id2, id: id1,userId:req.user.id}})
        .then(res.status(204).send('Deleted comment'))
        .catch(err => {
            res.status(500).send({
                message: err.message && "Some error occurred while deleting comment."
            });
        });
    }
    if (req.user.role == "Admin") {
        Comment.destroy({where: {postId: id2, id: id1}})
        .then(res.status(204).send('Deleted comment'))
        .catch(err => {
            res.status(500).send({
                message: err.message && "Some error occurred while deleting comment."
            });
        });
    }


}

module.exports = {
    addComment,
    getAllComments,
    getComment,
    updateComment,
    deleteComment,
}