import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

//routes
import router from './routes/auth.js';
app.use('/api/auth/', router );


//connect DB and start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, ()=>console.log('Server Running on Port 5000')); 