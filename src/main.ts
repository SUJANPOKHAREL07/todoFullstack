import express from 'express'
import userRouter from './router/userRouter'

const app=express()
const PORT = 3000

app.use(express.json())

app.use("/user",userRouter)


app.listen(PORT,()=>{
    console.log("You are on port number:",PORT)
})