const express = require('express')
const cors = require('cors');
const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')

mongoose.connect(MONGOURI/*,{
    //useNewUrlParser:true,
    //useUnifiedTopology:true
}*/)

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("error",err)
})

require('./models/user')
require('./models/post')

app.use(cors());
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
// app.use(require('./routes/user'))



app.listen(PORT,()=>{
    console.log("sever is runnning on", PORT)
})





// const customMiddleware =(req,res,next)=>{
//     console.log("middleware executed!!")
//     next()
// }

// //app.use(customMiddleware)


// app.get('/',(req,res)=>{
//     console.log("home")
//     res.send("hello world")
// })

// app.get('/about',customMiddleware,(req,res)=>{
//     console.log("about")
//     res.send("about page")
// })