import express from "express"
import AssignaturesModel from "../models/assignatures.js"
import TeachersModel from "../models/teachers.js"

const AssignaturesController  = {}

AssignaturesController.get = async (req, res) => {
    try {
        const get = await AssignaturesModel.find();
        return res.status(200).json(get);
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

AssignaturesController.insert = async (req, res) => {
    try {
        const { subjectName, teacher_id, isAvailable } = req.body();

        //Validaciones
        subjectName = subjectName?.trim();
        teacher_id = teacher_id?.trim();

        if( !subjectName || !teacher_id ){
            return res.status(404).json({ message: "Completar todos los campos" });
        }

        teacherExist = await TeachersModel.findById({ teacher_id });
        if(!teacherExist){
            return res.status(404).status({ message: "Id teahcer not avaible" });
        }

        const newAssignature = AssignaturesModel({ subjectName, teacher_id, isAvailable: isAvailable || true })
        await newAssignature.save();

        return res.status(200).json({ message: "Assignature saved" });
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

AssignaturesController.put = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

AssignaturesController.delete = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

export default AssignaturesController;