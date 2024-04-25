const express = require('express')
const {connection, PORT} = require('./config/db')

const { userRouter } = require("./routes/user_routes");

const app = express()
app.use(express.json())

app.get('/', (_,res)=>{
    res.send({msg:"api is live"})
})

app.use("/user",userRouter);


app.listen(PORT, async()=>{
    try {
        await connection
        console.log("connected deta base")
    } catch (error) {
        console.log(error)
    }
    console.log(`api is running ${PORT}`)
})