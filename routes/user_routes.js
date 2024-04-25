const express = require('express');
const {getUsers,createUser} = require('../controller/user_controller');
const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/', createUser);

module.exports = {userRouter};
