const db = require('../models')
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const auth = require("../Auth/authentication")

const User = db.users



const login= async (req, res) => {
    const {username, password} = req.body;

    User.findOne({where: {name: username, password: password}})
    .then(data => {
        const accessToken = auth.generateToken(data)
        //res.status(200).send(json({"user": data, "access_token": accessToken}))})
        res.status(200).send({"user": data, "access_token": accessToken})})
    .catch(err => {
        res.status(500).send({
            message: err.message && "username or password incorrect!"
        });
    });

}

const register = async (req, res) => {
    const info = {
        name: req.body.username,
        password: req.body.password,
        email: req.body.email
    };
    console.log(info);
    
    User.create(info)
        .then(user => {
            console.log(user);
              user.dataValues.password = undefined;
              user.dataValues.iat = undefined;
              const token = auth.generateToken(user);
             res.status(201).send({ user, token });
         })
         .catch(err => {
             res.status(400).send({
                 message: err.message || "Some error occurred while creating the User."
             });
         });
}

const logout = async (req, res) => {
    User.update({ iat: null }, { where: { id: req.user.id } }).then(() => {
        res.send({
            message: "User logged out successfully."
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while logging out."
        });
    });
}

const profile = async (req, res) => {
    const user = await User.findOne({ where: { id: req.user.id } });
    res.send({ user });
}

module.exports = {
    login,
    register,
    logout,
    profile,
}