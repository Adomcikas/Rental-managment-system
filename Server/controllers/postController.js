const db = require('../models')

const Post = db.posts


const addPost = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        address: req.body.address,
        description: req.body.description,
        //approved: req.body.approved ? req.body.approved : false
    }

    Post.create(info)
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while creating post."
        });
    });
    //res.status(200).send(post)

}

const getAllposts = async (req, res) => {

    Post.findAll({})
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while retrieving posts."
        });
    });
}

const getPost = async (req, res) => {
    let id = req.params.id
    Post.findOne({where: {id: id}})
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while retrieving posts."
        });
    });
}

const updatePost = async (req, res) => {
    let id = req.params.id

    Post.update(req.body, {where: {id: id}})
    .then(data => {
        res.status(201).send(data)
    })
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while retrieving posts."
        });
    });
}

const deletePost = async (req, res) => {
    let id = req.params.id
    Post.destroy({where: {id: id}})
    .then(res.status(200).send('Deleted'))
    .catch(err => {
        res.status(400).send({
            message: err.message || "Some error occurred while deleting the Parcel."
        });
    });
}

module.exports = {
    addPost,
    getAllposts,
    getPost,
    updatePost,
    deletePost,
}