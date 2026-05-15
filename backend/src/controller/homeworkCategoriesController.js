import express from "express"
import homeworkCategoriesModel from "../models/homeworkCategories.js"

const homeworkCategoriesController  = {}

homeworkCategoriesController.get = async (req, res) => {
    try {
        const get = await homeworkCategoriesModel.find();
        return res.status(200).json(get);
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

homeworkCategoriesController.insert = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

homeworkCategoriesController.put = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

homeworkCategoriesController.delete = async (req, res) => {
    try {
        const deleteCategory = await homeworkCategoriesModel.findByIdAndDelete(req.params.id)
        if(!deleteCategory){
            return res.status(400).json({ message: "Category not founded" })
        }

        return res.status(200).json({ message: "Category deleted" })
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

export default homeworkCategoriesController;