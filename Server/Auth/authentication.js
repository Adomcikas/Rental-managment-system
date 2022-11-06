const jwt = require('jsonwebtoken');
const db = require("../models");
const Users = db.users;


exports.generateToken = (user) => {
    const secret = 'MySecretKey';
    const token = jwt.sign({id:user.id,email:user.email,role: user.role}, secret);
    console.log(token);

    const decoded = jwt.verify(token, secret);

    Users.update({
        iat: decoded.iat
    }, {
        where: {
            id: user.id
        }
    });

    return token;
};

exports.authorization = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const secret = 'MySecretKey';

    if(authHeader) {
        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, secret)
        
        const user = await Users.findByPk(decoded.id)
        if(!user || user.iat != decoded.iat)
            res.status(500).send({
                message: "user is not logged in"
            });

        user.dataValues.iat = undefined;

        req.user = user;    
        next();

    }else {
        res.status(403).json("You are not authenticated!");
    }
};