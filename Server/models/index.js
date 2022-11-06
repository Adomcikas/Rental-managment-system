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
db.users = require('./UserModel.js')(sequelize, DataTypes) 

db.posts.hasMany(db.comments, {
     as: "comment",
     onDelete: 'CASCADE'
});
db.comments.belongsTo(db.posts, {
    foreignKey: "postId",
    as: "post",
    onDelete: 'CASCADE'
});

db.comments.hasMany(db.reviews, {
     as: "review",
     onDelete: 'CASCADE'
});
db.reviews.belongsTo(db.comments, {
    foreignKey: "commentId",
    onDelete: 'CASCADE',
    as: "comment"
});
db.users.hasMany(db.posts,{
    as: "post",
    onDelete: 'CASCADE'
})
db.posts.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user",
    onDelete: 'CASCADE'
});
db.users.hasMany(db.comments,{
    as: "comment",
    onDelete: 'CASCADE'
})
db.comments.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user",
    onDelete: 'CASCADE'
});
db.users.hasMany(db.reviews,{
    as: "review",
    onDelete: 'CASCADE'
})
db.reviews.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user",
    onDelete: 'CASCADE'
});

module.exports = db