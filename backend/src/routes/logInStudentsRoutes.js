import e from "express";
import loginStudents from "../controller/logInStudentsController";

const router = e.Router();

router.route("/").post(loginStudents.LogIn)

export default router;