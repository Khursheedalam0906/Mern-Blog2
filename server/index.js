import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Dbconnection from './database/DbConfig.js'
import AuthRouter from './routes/userRoute.js'
import BlogRouter from './routes/blogRoute.js'
import CategoryRouter from './routes/categoryRoute.js'

dotenv.config()
Dbconnection()

const PORT = process.env.PORT || 8000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public/uploads"))
 
app.get("/", (req, res) => {
    res.send("Api is running")
})

app.use("/api/v1", AuthRouter)
app.use("/api/v1", BlogRouter)
app.use("/api/v1", CategoryRouter)
 

app.listen(PORT, () => {
    console.log("Server is running on PORT :", PORT)
}) 