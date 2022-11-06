const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("post", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Title cannot be empty"
                },
                notNull: {
                    msg: 'Title is required'
                }
            }
        },
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            validate: {
                isNumeric: {
                    msg: "Price must be a number"
                },
                notEmpty: {
                    msg: "Price cannot be empty"
                },
                notNull: {
                    msg: 'Price is required'
                },
                min: {
                    args: 0.001,
                    msg: 'Price must be greater than 0'
                }
                  
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "address cannot be empty"
                },
                notNull: {
                    msg: 'address is required'
                }
                  
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "description cannot be empty"
                },
                notNull: {
                    msg: 'description is required'
                }
            }
        },
        approved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })

    return Post
}