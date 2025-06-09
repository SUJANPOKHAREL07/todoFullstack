import express from 'express'
import userRouter from './router/userRouter'
import taskRouter from './router/taskRouter'

const app=express()
const PORT = 3000

app.use(express.json())

app.use("/user",userRouter)
app.use("/tasks",taskRouter)

app.listen(PORT,()=>{
    console.log("You are on port number:",PORT)
})