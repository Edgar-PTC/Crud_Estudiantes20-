import express from "express"
import studentsModel from "../models/students.js"

const studentsController  = {}

studentsController.get = async (req, res) => {
    try {
        const get = await studentsModel.find();
        return res.status(200).json(get);
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

studentsController.put = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

studentsController.delete = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

export default studentsController;