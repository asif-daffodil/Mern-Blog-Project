const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
const mongoose = require('mongoose');
require('dotenv').config();

const mongoConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        if(conn) {
            console.log('MongoDB connected');
        }else{
            throw new Error('MongoDB connection failed');
        }
    }catch(err) {
        console.error('MongoDB connection error:', err);
    }
}

mongoConnect();

const apiRoutes = require('./routes/api');
app.use(`/api/v${process.env.API_VERSION}`, apiRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

