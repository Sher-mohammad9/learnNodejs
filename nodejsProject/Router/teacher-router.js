const express = require("express");
const teacherApi = require("../Controller/teacherController.js");
const teacherRouter = express.Router();

teacherRouter.route("").get(teacherApi.getAllTeacher).post(teacherApi.createTeacher).put(teacherApi.updateTeacher).delete(teacherApi.deleteTeacher);

teacherRouter.route("/:teacherId").get(teacherApi.getTeacherById).delete(teacherApi.deleteTeacher).put(teacherApi.updateTeacher);

module.exports = teacherRouter;