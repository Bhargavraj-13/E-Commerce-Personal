const express = require('express')
const mongoose = require('mongoose')
const errorHandler = require('./middleware/errorHandler')

require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const db_url = process.env.db_url;

app.use(express.json())
app.use(errorHandler)
// app.use(cors())

const connectDB = async(req,res)=>{
    try{
        await mongoose.connect(db_url);
        console.log("MongoDB is successfully created");
    }
    catch(error){
        console.error('error connecting to database')
    };
    
}

connectDB();

app.get('/',(req,res)=>{
    res.send('Hello, Fools')
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

