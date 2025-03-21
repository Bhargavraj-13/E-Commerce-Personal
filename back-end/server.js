const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('../back-end/middleware/errorHandler');
const userRoutes = require('..back-end/routes/userRoutes');
const path = require('path');


require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const db_url = process.env.db_url;

app.use(express.json())
app.use(errorHandler)
app.use(cors())

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

app.use('/uploads',express.static(path.join(__dirname,"uploads")));
app.use('/api/users', userRoutes);

app.get('/',(req,res)=>{
    res.send('Hello, Fools')
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
