'use strict';
const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');
const commonCtrl = require('../controllers/common');
const userCtrl = require('../controllers/users');


router.get('/posts', postCtrl.getPosts, userCtrl.getUsers, commonCtrl.concatResponse(['users', 'posts']), commonCtrl.responseToJson('concated'));

router.get('/posts/:id', postCtrl.getPostById);

router.post('/posts', postCtrl.createPosts);

router.delete('/posts/:id', postCtrl.deletePostById);

router.put('/posts/:id', postCtrl.updatePostById);

module.exports = router;
