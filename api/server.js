const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');

const categoriesRouter = require('../routers/categories/router')

const server = express();

server.use(helmet());
server.use(cors())
server.use(express.json());


server.use('/api/auth', authRouter);
server.use('/api/categories', authenticate,  categoriesRouter),



server.get("/", (req, res) => {
    res.status(200).json({ api : "up"});
  });

module.exports = server;