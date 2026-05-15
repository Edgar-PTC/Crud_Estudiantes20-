/*
    name
    lastName
    email
    password
    birthdate
    phone
    grade
    isVerified
    loginAttempts
    timeOut
*/

import { Model, model, Schema } from "mongoose"

const studentsModel = new Schema({
    "name": {
        type: String
    },
    "lastName": {
        type: String
    },
    "email": {
        type: String
    },
    "password": {
        type: String
    },
    "birthdate": {
        type: Date
    },
    "phone": {
        type: String
    },
    "grade": {
        type: String
    },
    "isVerified": {
        type: Boolean
    },
    "loginAttempts": {
        type: Number
    },
    "timeOut": {
        type: Date
    }
},{
    timestamps: true,
    strict: false
})

export default Model("Students", studentsModel);