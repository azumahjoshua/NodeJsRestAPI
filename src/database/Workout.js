
const DB = require("./db.json")
const { saveToDataBase } = require("./utils")
const getAllWorkouts = (filterParams) => {
    try {
        let workouts = DB.workouts
        if (filterParams.equipment) {
            return DB.workouts.filter((workout) =>
                workout.equipment.toLowerCase().includes(filterParams.equipment)
            );
        }
        return workouts;
    } catch (error) {
        throw { status: 500, message: error };
    }
}

const getOneWorkout = (workoutId) => {
    try {
        const workout = DB.workouts.find((workout) => workout.id === workoutId);
        if (!workoutId) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,
            }
        }return workout
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }
    }
}
const createNewWorkout = (newWorkout) => {
    try {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `Workout with the name '${newWorkout.name}' already exists`,
        }
        }
        DB.workouts.push(newWorkout);
        saveToDataBase(DB);
        return newWorkout
    } catch (error) {
            throw { status: 500, message: error?.message || error };

    }
};
const updateOneWorkout = (workoutId, changes) => {
    try {
        //find index of workout
        const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === changes.name) > -1
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `Workout with the name '${changes.name}' already exists`,
            }
        }
        const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId)
        if (indexForUpdate === -1) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`
            }
        }
        const updatedWorkout = {
            ...DB.workouts[indexForUpdate],
            ...changes,
            updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        }
        DB.workouts[indexForUpdate] = updatedWorkout;
        saveToDataBase(DB)
        return updatedWorkout
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

    const deleteOneWorkout = (workoutId) => {
        try {
            const indexForDeletion = DB.workouts.findIndex((workout) => workout.id === workoutId)
            if (indexForDeletion === -1) {
                throw {
                    status: 400,
                    message: `Can't find workout with the id '${workoutId}'`
                }
            }
            DB.workouts.splice(indexForDeletion, 1)
            saveToDataBase(DB)
        } catch (error) {
            throw {
                status: error?.status || 500, message: error?.message || error
            }
        }
    }
module.exports = {
    getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
    deleteOneWorkout,
};