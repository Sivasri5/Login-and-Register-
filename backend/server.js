const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

app.use(cors({
  origin: 'https://login-signup-0bpi.onrender.com',
  //origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());
app.use(morgan('dev'));

const authRoutes = require('./routes/auth');
app.use('/api/users',authRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DB connected successfully");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running in port ${process.env.PORT}`);
    })
})

.catch((err)=>console.log("Connection failes",err));
