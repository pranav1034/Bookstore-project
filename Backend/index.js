import express from "express";
import {PORT , mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from './Models/bookModel.js';
import bookRoutes from './Routes/bookRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request,response)=>{
    return response.status(200).send('Welcome to bookstore');
})

app.use('/books', bookRoutes);

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('Database succesfully connected');
    app.listen(PORT , ()=> {
        console.log('Server conncected');
    })
})
.catch((error) => {
    console.log(error);
});





