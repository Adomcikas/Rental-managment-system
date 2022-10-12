const { Sequelize } = require("Sequelize")

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
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            isInt: true,
            allowNull: false,
            validate: {
                isInt: {
                    msg: "Must be an integer"
                  }
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        approved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })

    return Post
}