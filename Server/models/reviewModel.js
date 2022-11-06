const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("review", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        rating: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                isNumeric: {
                    msg: "Rating must be a number"
                },
                notEmpty: {
                    msg: "Rating cannot be empty"
                },
                notNull: {
                    msg: 'Rating is required'
                },
                min: {
                    args: -5,
                    msg: 'Rating must be in between -5 and 5'
                },
                max: {
                    args: 5,
                    msg: 'Rating must be in between -5 and 5'
                },
            }
        }
    })
    
    return Review
}
