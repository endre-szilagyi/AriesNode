'use strict';
const Posts = require('../models/posts');
/**
 *
 * @type {users}
 */
module.exports = {
    getPosts,
    createPosts,
    deletePostById,
    updatePostById,
    getPostById,
    firstMiddleWare
};

function firstMiddleWare(req, res, next) {
    console.log('First Middleware');
    next()
}

function getPosts(req, res, next) {
    console.log('GET call for users');

    Posts.find()
        .populate('user', 'name email')
        .exec((err, result) => {
            if(err){
                console.log('err', err)
            }

            res.resources.posts =  result;
            next()
        })
}

function getPostById(req, res, next) {
    console.log('GET call for user by ID');

    Posts.find({_id:  req.params.id})
        .populate('user', 'name email')
        .exec((err, result) => {
        if(err){
            console.log('err', err)
        }
        res.json({data: result})
    })
}

function createPosts(req, res, next) {
    console.log('Post call to create users');


    const post = new Posts({title: req.body.title, content: req.body.content, postType: req.body.postType, user: req.body.user});

    post.save((err, result) => {
        if (err) {
            console.log('err', err);
        }

        console.log('result', result);
        return res.json({ data: result });
    })
}

function deletePostById(req, res, next){
    console.log('Delete call for user by id');

    Posts.findOneAndDelete({_id:  req.params.id}, (err, result) => {
        if(err){
            console.log('err', err)
        }
        res.json({data: result})
    });
}

function updatePostById(req, res, next){
    console.log('update call for posts by id');

    Posts.findByIdAndUpdate({_id:  req.params.id}, req.body, (err, result) => {
        if(err){
            console.log('err', err)
        }
        res.json({data: result})
    })
}
