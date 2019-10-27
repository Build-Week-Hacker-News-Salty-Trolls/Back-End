const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const AuthRouter = require('../auth/auth-router');
const AuthorRouter = require('../authors/authors-router');
const UsersRouter = require('../users/users-router');
const CommentsRouter = require('../comments/comments-router');

const server = express();



server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/api/auth', AuthRouter);
server.use('/api/loggedin', UsersRouter);
server.use('/api/hacker-news', AuthorRouter);
server.use('/api/salt', CommentsRouter);



//TEST TO SEVER
server.get('/', (req,res) => {
    res.status(200).json({ message: 'IN THERE LIKE SWIM WEAR' });
})

module.exports = server;