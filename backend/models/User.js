const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar:{
        type: String
    },
    secteur:{
        type: String,
        required: true
    },
    pays:{
        type: String,
        required: true
    },
    phone:{
        type: String,
    },
    type:{
        type: String
    },
    aproved:{
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;