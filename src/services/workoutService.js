/**
 * It's also a good practice to name the service methods the same as the controller methods so that you have a connection between those. 
 */
const {v4:uuid } = require('uuid')
const Workout = require('../database/Workout')
const getAllWorkouts = () => {
    try {
        const allWorkouts = Workout.getAllWorkouts()
        return allWorkouts;
    } catch (error) {
        throw error
    }
}

const getOneWorkout = (workoutId) => {
    try {
        const workout = Workout.getOneWorkout(workoutId)
        return workout
    } catch (error) {
        throw error
    }
}

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
         createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    }
    try {
        const createdWorkout = Workout.createdWorkout(workoutToInsert);
        return createdWorkout
    }
    catch (error) {
        throw error
    }

}

const updateOneWorkout = (workoutId, changes) => {
    try {
        const updatedWorkout = Workout.updateOneWorkout(workoutId, changes)
        return updatedWorkout
    } catch (error) {
        throw error
    }
}

const deleteOneWorkout = (workoutId) => {
    try{
        Workout.deleteOneWorkout(workoutId)
    }catch (error) {
        throw error
    }
}

module.exports = {
    getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}