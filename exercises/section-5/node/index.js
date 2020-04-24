const express = require("express")
const redis = require("redis")
const process = require("process")

const app = express()
const client = redis.createClient({
    host: 'redis-server'
})

const port = 8081
const visitsKey = "visits"

client.set(visitsKey, 0)

app.get("/", (req, res) => {
    process.exit(0)
    client.get(visitsKey, (err, value) => {
        res.send(`Total visitors: ${value}`)
        client.set(visitsKey, parseInt(value)+1)
    })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})