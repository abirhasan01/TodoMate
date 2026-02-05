require("dotenv").config()
const express = require("express")
const todoRouter = require("./routes/todo.route")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=> {
    res.send("API Working")
})
app.use("/todos", todoRouter)

app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
})