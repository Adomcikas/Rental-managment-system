module.exports = {
    HOST: 'ltnya0pnki2ck9w8.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    USER: 'b3m1i7l85gmnmp2f',
    PASSWORD: 'l81z1bn5m10l4n9t',
    DB: 'qm9lkmsirtnjs7p4',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

    
}
jwt_expiration=7;