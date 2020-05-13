'use strict';
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const commonCtrl = require('../controllers/common');

router.get('/users' ,usersCtrl.getUsers, commonCtrl.responseToJson('user'))

router.get('/users/:id', usersCtrl.getUserById);

router.post('/users', usersCtrl.createUsers);

router.delete('/users/:id', usersCtrl.deleteUserById);

router.put('/users/:id', usersCtrl.updateUserById);

module.exports = router;
