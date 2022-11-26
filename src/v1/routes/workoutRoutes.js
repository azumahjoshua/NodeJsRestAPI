// const { response } = require('express');
const express = require('express');
const workoutController = require("../../controllers/workoutController")

const recordControllers = require("../../controllers/recordController")

const router = express.Router();

router.get("/",workoutController.getAllWorkouts)

router.get("/:workoutId", workoutController.getAllWorkouts)

router.get("/:workoutId/records", recordControllers.getRecordForWorkout)

router.post("/",workoutController.createNewWorkout)

router.patch("/:workoutId",workoutController.updateOneWorkout)

router.delete("/:workoutId", workoutController.deleteOneWorkout)

module.exports = router;
