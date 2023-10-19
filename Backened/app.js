const express =require('express')
const app=express()
const cors =require("cors")
const bookRoute=require("./routes/bookRoutes")
require("./connection/connect")
app.use(express.json());
app.use(cors());
app.use("/api/v1",bookRoute)
app.listen(5000,()=>{
    console.log('server started')
})