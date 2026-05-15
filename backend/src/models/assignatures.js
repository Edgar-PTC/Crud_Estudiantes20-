/*
    subjectName
    teacher_id
    isAvailable
*/

import mongoose, { Model, model, Schema } from "mongoose"
import Teachers from "./teachers"

const assignaturesModel = new Schema({
    "subjectName": {
        type: String
    },
    "teacher_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: Teachers
    },
    "isAvailable": {
        type: Boolean
    }
}, {
    timestamps: true,
    strict: false
})

export default Model("Assignatures", assignaturesModel)