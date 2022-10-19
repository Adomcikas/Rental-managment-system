const db = require('../models')


const Post = db.posts
const Comment = db.comments
const Review = db.reviews


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
        res.status(201).send(data)
    })
    .catch(err => {
        res.status(400).send({
            message: err.message && "Some error occurred while creating post."
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
        res.status(500).send({
            message: err.message && "Some error occurred while retrieving posts."
        });
    });
}

const getPost = async (req, res) => {
    let id = req.params.id
    Post.findOne({where: {id: id}})
    .then(data => {
        if(data == null)
        {
            res.status(404).send("Some error occurred while retrieving post.")
            return;
        }
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message && "Some error occurred while retrieving posts."
        });
    });
}

const updatePost = async (req, res) => {
    let id2 = req.params.id

    Post.update(req.body, {where: {id: id2}})
    .then(data => {
        if(data == 0 || data == null)
        {
            res.status(404).send("Some error occurred while updating post.")
            return;
        }
        res.status(201).send(data && 'Updated')
    })
    .catch(err => {
        res.status(400).send({
            message: err.message && "Some error occurred while updating post."
        });
    });
}

const deletePost = async (req, res) => {
    let id2 = req.params.id
        Post.destroy({where: {id: id2}})
        .then(data => {
            if(data == 1) {
                res.status(204).send(data)
            }
            else {
                res.status(404).send('Post with given id not found')
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message && "Some error occurred while deleting post."
            });
        });

    };

module.exports = {
    addPost,
    getAllposts,
    getPost,
    updatePost,
    deletePost,
}