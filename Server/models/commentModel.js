const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define("comment", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Description cannot be empty"
                },
                notNull: {
                    msg: 'Description is required'
                }
            }
        }
    })

    return Comment
}