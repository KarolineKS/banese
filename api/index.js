import express from 'express';
import userRouter from './routes/user.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/users', userRouter);

export default app;
