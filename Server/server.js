const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/postRouter.js')
const commentRouter = require('./routes/commentRounter.js')
const reviewRouter = require('./routes/reviewRounter.js')
const UserRouter = require('./routes/UserRouter.js')
const db = require('./models')

const app = express();

var corsOptions = {
    origin: 'https://localhost:8000'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


db.sequelize.sync({force: false })
.then(() => {
    console.log('Connected to db..')
})
.catch(err => {
    console.log('Error'+ err)
})

app.use('/api/posts', postRouter)
app.use('/', commentRouter)
app.use('/', reviewRouter)
app.use('/',UserRouter)

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));