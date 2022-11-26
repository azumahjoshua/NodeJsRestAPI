const records = require("../database/Record")
const getRecordForWorkout = (workoutId) => {
    try {
        const record = records.getRecordForWorkout(workoutId)
        // console.log(record)
        return record
    } catch (error) {
       throw error 
    }
}

module.exports={getRecordForWorkout}