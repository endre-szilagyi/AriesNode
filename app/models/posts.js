'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


const postSchema = new Schema({
    createdAt: Number,
    updatedAt: Number,
    title: {type: String, required: [true, 'Title field is required'], unique: true},
    content: {type: String, unique: false},
    postType: {
        type: Array
    },
    user: {
        type: ObjectId,
        ref: 'user',
        required: [true, 'User Id is required']
    }
}, {timestamps: {currentTime: () => new Date().getTime()}});

module.exports = mongoose.model('post', postSchema, 'posts');
