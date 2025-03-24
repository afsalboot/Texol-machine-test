const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const authRoute = require('./Routes/auth')
const questionRoute = require('./Routes/question')
const testSubmitRoute = require('./Routes/testSubmission')
const feedbackRoute = require('./Routes/feedback')

dotenv.config()


const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('DB Connected!')
}).catch((err)=>{
    console.log(err.message)
});


app.use('/api/auth',authRoute)
app.use('/api/question',questionRoute)
app.use('/api/test',testSubmitRoute)
app.use('/api/feed',feedbackRoute)




app.listen(PORT, ()=>{
    console.log(`Server Connected Port ${PORT}`);
})