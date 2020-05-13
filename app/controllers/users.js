'use strict';
const User = require('../models/user');
/**
 *
 * @type {users}
 */
module.exports = {
    getUsers,
    createUsers,
    deleteUserById,
    updateUserById,
    getUserById,
    firstMiddleWare
};

function firstMiddleWare(req, res, next) {
    console.log('First Middleware');
    next()
}

function getUsers(req, res, next) {
    console.log('GET call for users');

    User.find((err, result) => {
        if(err){
            console.log('err', err)
        }

        res.resources.user= result;
        next()
    })
}

function getUserById(req, res, next) {
    console.log('GET call for user by ID');

    User.find({_id:  req.params.id}, (err, result) => {
        if(err){
            console.log('err', err)
        }
        res.json({data: result})
    })
}

function createUsers(req, res, next) {
    console.log('Post call to create users');


    const user = new User({name: req.body.name, email: req.body.email, activities: req.body.activities});

    user.save((err, result) => {
        if (err) {
            console.log('err', err);
        }

        console.log('result', result)
        return res.json({ data: result });
    })
}

function deleteUserById(req, res, next){
    console.log('Delete call for user by id');

    User.findOneAndDelete({_id:  req.params.id}, (err, result) => {
        if(err){
            console.log('err', err)
        }
        res.json({data: result})
    });
}

function updateUserById(req, res, next){
    console.log('update call for user by id');

    User.findByIdAndUpdate({_id:  req.params.id}, req.body, (err, result) => {
        if(err){
            console.log('err', err)
        }
        res.json({data: result})
    })
}
