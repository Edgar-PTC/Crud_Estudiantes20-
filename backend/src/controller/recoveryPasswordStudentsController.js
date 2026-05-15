import nodemailer from "nodemailer"
import crypto from "crypto"
import jsonwebtoken from "jsonwebtoken"
import bcrypts from "bcryptjs"
import Students from "../models/students.js"

import { config } from "../config.js"

const recoveryPasswordStudentController = {}

recoveryPasswordStudentController.requestCode = async(req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

recoveryPasswordStudentController.verifyCode = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

recoveryPasswordStudentController.newPassword = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

export default recoveryPasswordStudentController;