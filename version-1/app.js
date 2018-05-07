const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const knex = require('./database-connection')
const app = express()

const resolutions = require("./routes/resolutions")

app.get('/api/v1/resolutions', (req, res) => {
    knex.from('resolutions')
    .then(resolutions => res.status(200).json(resolutions))
    .catch(res => res.status(500).json({ error: error.message, stack: error.stack }))
})

// app.get("/", (request, response) => {
//     response.status(200).send()
// })

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use("/resolutions", resolutions)

app.use((req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404;
    next(err)
});

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    })
})

module.exports = app
