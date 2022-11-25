const { response } = require("express")
const express = require("express")

const router = express.Router()

router.route("/").get((request, response) => {
    response.send(`<h2>Hello from ${request.baseUrl}</h2>`)
})

module.exports = router;