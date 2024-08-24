const { Schema, model, Types } = require('mongoose');

const UserSchema = Schema({

    FullName: {
        type: String,
        required: true,
        trim: true,
        default: null
    },

    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        default: null
    },

    Password: {
        type: String,
        required: true,
        trim: true,
        default: null
    },

    Phone: {
        type: String,
        required: true,
        trim: true,
        default: null
    },

    Address: {
        type: String,

        trim: true,
        default: null
    },

    Role: {
        type: String,
        required: true,
        trim: true,
        default: null
    }
},
    {
        timestamps: true,

    }
)

const User_model = model('User', UserSchema);

module.exports = User_model;