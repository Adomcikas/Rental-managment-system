const { Sequelize } = require("Sequelize")

module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "name cannot be empty"
                },
                notNull: {
                    msg: 'name is required'
                }
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Email cannot be empty"
                },
                isEmail: {
                    msg: "Email must be a valid email address"
                },
                notNull: {
                    msg: 'Email is required'
                }
            }
        },
        role: {
            type: Sequelize.ENUM('User', 'Admin'),
            defaultValue: 'User'
        },
        iat: {
            type: Sequelize.INTEGER,
            allowNull: true,
            default: null
        }
    })

    return Post
}