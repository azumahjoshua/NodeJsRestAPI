const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get("/", (request, response) => {
    response.send('Get all workouts')
})

router.get("/:workoutId", (request, response) => {
    response.send('Get an existing workout')
})

router.post("/", (request, response) => {
    response.send('Create a new workout')
})

router.patch("/:workoutId", (request, response) => {
    response.send('Update an existing workout')
})

router.delete("/:workoutId", (request, response) => {
    response.send('Delete an existing workout')
})

module.exports = router;
