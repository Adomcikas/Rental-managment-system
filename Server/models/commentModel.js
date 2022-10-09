const { Sequelize } = require("Sequelize")

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
            allowNull: false
        }
    })

    return Comment
}