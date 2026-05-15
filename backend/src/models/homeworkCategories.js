/*
    categoryName
    description
    color
    isActive
*/

import { Model, model, Schema } from "mongoose"

const homeworkCategoriesModel = new Schema({
    "categoryName": {
        type: String
    },
    "description": {
        type: String
    },
    "color": {
        type: String
    },
    "isActive": {
        type: Boolean
    }
}, {
    timestamps: true,
    strict: false
})

export default Model("HomeworkCategories", homeworkCategoriesModel)