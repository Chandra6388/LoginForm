const { Schema, model, Types } = require('mongoose');

const UserSchema = Schema({
    FullName: {
        type: String,
        trim: true,
        default: null
    },
    Email: {
        type: String,
        unique: true,
        trim: true,
        default: null
    },
    Password: {
        type: String,
        trim: true,
        default: null
    },
    Phone: {
        type: String,
        trim: true,
        default: null
    },
    OrganisationName: {
        type: String,
        trim: true,
        default: null
    },
    OrganisationId: {
        type: String,
        trim: true,
        default: null
    },
    Designation: {
        type: String,
        
        trim: true,
        default: null
    },
    DOB: {
        type: String,
        
        trim: true,
        default: null
    },
    city: {
        type: String,
        
        trim: true,
        default: null
    },
    pincode: {
        type: String,
        
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