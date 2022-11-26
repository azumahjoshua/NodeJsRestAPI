const workoutService = require("../services/workoutService")

const getAllWorkouts = (request, response) => {
    const { mode } = request.query
    try {
        const allWorkouts = workoutService.getAllWorkouts({mode})
        response.send({ status: "OK", data: allWorkouts })
    } catch (error) {
        response.status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } })
    }
}

const getOneWorkout = (request, response) => {
    const { params: { workoutId } } = request
    if (!workoutId) {
        response.status(400)
            .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      })
    }
    try {
        const workout = workoutService.getOneWorkout()
        response.send("Get an existing workout")
    } catch (error) {
        response
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } })
    }
}

const createNewWorkout = (request, response) => {
    const { body } = request
    if(!body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
        !body.trainerTips) {
        response.status(400).send({
             status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
        })
        return;
    }
    const neWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips : body.trainerTips
    }
    try {
        const createdWorkout = workoutService.createNewWorkout(neWorkout)
        response.status(201).send({
            status: "OK", data: createdWorkout
        })
    } catch (error) {
        response
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const updateOneWorkout = (request, response) => {
    const {
        body,params:{workoutId},
    } = request
    if (!workoutId) {
        response.status(400)
            .send({
            status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" }
        })
    }
    try {
        const updateWorkout = workoutService.updateOneWorkout(workoutId,body)
        response.send("Update an existing workout")
    } catch (error) {
        response.status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } })
    }
}

const deleteOneWorkout = (request, response) => {
    const {
        params: { workoutId }
    } = request
    if (!workoutId) {
        response.status(400)
            .send({status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
    }
    try {
        workoutService.deleteOneWorkout(workoutId)
        response.send("Delete an existin workouts")
    } catch (error) {
        response.status(error?.status || 500)
            .send({
                status: "FAILED", data: { error: error?.message || error }
            })
    }
}

module.exports = {
    getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}