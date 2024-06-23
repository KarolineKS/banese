import express from 'express';
import userRouter from './routes/user.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/users', userRouter);

app.listen(8000, ()=> {
  console.log('Server is running on port 8000!')
})