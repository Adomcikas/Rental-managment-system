const { Sequelize } = require("Sequelize")

module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("review", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        rating: {
            type: DataTypes.INTEGER
        }
        // description: {
        //     type: DataTypes.TEXT,
        //     allowNull: true
        // }
    })

    return Review
}