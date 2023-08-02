const express = require("express");
const studentApi = require("../Controller/studentController.js");
const studentRouter = express.Router();

studentRouter.route("").get(studentApi.getAllStudent).post(studentApi.createStudent).delete(studentApi.deleteStudent).put(studentApi.updateStudent);

studentRouter.route("/:studentId").get(studentApi.getStudentById).delete(studentApi.deleteStudent).put(studentApi.updateStudent);

module.exports = studentRouter;