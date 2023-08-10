const express = require("express");
const studentApi = require("../Controller/studentController.js");
const userIdentification = require("../middleware/student-middleware.js");
const studentRouter = express.Router();

studentRouter.route("").get(studentApi.getStudentData).post(studentApi.createStudent).delete(studentApi.deleteStudent).put(studentApi.updateStudent);

studentRouter.route("/:studentId").get(studentApi.getStudentByMobile).delete(studentApi.deleteStudent).put(studentApi.updateStudent);

studentRouter.param("studentId", userIdentification);

module.exports = studentRouter;