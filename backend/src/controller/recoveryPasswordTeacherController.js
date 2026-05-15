import nodemailer from "nodemailer"
import crypto from "crypto"
import jsonwebtoken from "jsonwebtoken"
import bcrypts from "bcryptjs"
import Teachers from "../models/teachers.js"

import { config } from "../config.js"

const recoveryPasswordTeacherController = {}

recoveryPasswordTeacherController.requestCode = async(req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

recoveryPasswordTeacherController.verifyCode = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

recoveryPasswordTeacherController.newPassword = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

export default recoveryPasswordTeacherController;