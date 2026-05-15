import e from "express";
import loginTeachers from "../controller/logInTeachersController";

const router = e.Router();

router.route("/").post(loginTeachers.LogIn)

export default router;