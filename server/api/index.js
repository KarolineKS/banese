
import express from 'express';
import userRouter from './routes/user.js';
import cors from 'cors';

const app = express();

app.use(express.json()); 
app.use(cors()); 
app.use('/api/users', userRouter); 

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor API rodando na porta ${PORT}`);
});

export default app;
