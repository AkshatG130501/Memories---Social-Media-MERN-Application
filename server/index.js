import express from 'express';
// const express = require('express'); old syntax.
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes);

const CONNECTION_URL = 'mongodb+srv://GuptaAkshat:metalbraces7771@cluster0.2roqzo0.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser : true, useUnifiedTopology :true})
.then(() => app.listen(PORT,() => console.log(`Server running on port: ${PORT}`)))
.catch( (error) => console.log(error.message) );

//mongoose.set('useFindAndModify',false);