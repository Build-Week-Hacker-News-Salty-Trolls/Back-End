const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const AuthRouter = require('../auth/auth-router');
const UsersRouter = require('../users/users-router');


const server = express();



server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/api/auth', AuthRouter);
server.use('/api/loggedin', UsersRouter);





//TEST TO SEVER
server.get('/', (req,res) => {
    res.status(200).json({ message: 'IN THERE LIKE SWIM WEAR' });
})

module.exports = server;