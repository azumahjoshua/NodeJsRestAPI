const workoutService = require("../services/workoutService")
const getAllWorkouts = (request, response) => {
    const allWorkouts = workoutService.getAllWorkouts()
    response.send({status: "OK", data: allWorkouts})
}

const getOneWorkout = (request, response) => {
    const workout = workoutService.getOneWorkout()
    response.send("Get an existing workout")
}

const createNewWorkout = (request, response) => {
    const createNewWorkout = workoutService.createNewWorkout()
    response.send("Create a new workouts")
}

const updateOneWorkout = (request, response) => {
    const updateWorkout = workoutService.updateOneWorkout()
    response.send("Update an existing workout")
}

const deleteOneWorkout = (request, response) => {
    workoutService.deleteOneWorkout()
    response.send("Delete an existin workouts")
}

module.exports = {
    getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}