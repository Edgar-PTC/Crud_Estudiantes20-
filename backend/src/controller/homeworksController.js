import express from "express"
import homeworksModel from "../models/homeworks.js"

const homeworksController  = {}

homeworksController.get = async (req, res) => {
    try {
        const get = await homeworksModel.find();
        return res.status(200).json(get);
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

homeworksController.insert = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

homeworksController.put = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

homeworksController.delete = async (req, res) => {
    try {
        const deleteHomework = await homeworksModel.findByIdAndDelete(req.params.id)
        if(!deleteHomework){
            return res.status(400).json({ message: "Homework not founded" })
        }

        return res.status(200).json({ message: "Homework deleted" })
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

export default homeworksController;