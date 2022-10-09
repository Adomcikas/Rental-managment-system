const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');
const dbconfig = require('../config/dbConfig.js');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbconfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.posts = require('./postModel.js')(sequelize, DataTypes)
db.comments = require('./commentModel.js')(sequelize, DataTypes)
db.reviews = require('./reviewModel.js')(sequelize, DataTypes)
// db.users 

db.posts.hasMany(db.comments, { as: "comment" });
db.comments.belongsTo(db.posts, {
    foreignKey: "postId",
    as: "post",
});

db.comments.hasMany(db.reviews, { as: "review" });
db.reviews.belongsTo(db.comments, {
    foreignKey: "commentId",
    as: "comment",
});

module.exports = db