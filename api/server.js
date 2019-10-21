const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();



server.use(helmet());
server.use(cors());
server.use(express.json());









//TEST TO SEVER
server.get('/', (req,res) => {
    res.status(200).json({ message: 'IN THERE LIKE SWIM WEAR' });
})

module.exports = server;