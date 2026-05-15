/*
    title
    description
    dueDate
    priority
    status
*/

import { Model, model, Schema } from "mongoose"

const homeworksModel = new Schema({
    "title": {
        type: String
    },
    "description": {
        type: String
    },
    "dueDate": {
        type: Date
    },
    "priority": {
        type: String
    },
    "status": {
        type: String
    }
}, {
    timestamps: true,
    strict: false
})

export default Model("Homeworks", homeworksModel)