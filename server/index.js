const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const addRoute = require('./routes/addRoute');
const viewRoute = require('./routes/viewRoute');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors());

app.get('/', (_, res)=>{
    res.send("node: default route")
})

// Routes
app.use('/thought', addRoute) // 1)
app.use('/thought', viewRoute)  

const port = require('./config/port');
try{
    app.listen(port)
}catch(error){
    console.log(error)
}