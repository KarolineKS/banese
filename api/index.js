// index.js (api/index.js)

import express from 'express';
import userRouter from './routes/user.js';
import cors from 'cors';

const app = express();

app.use(express.json()); // Middleware para processar corpos JSON das requisições
app.use(cors()); // Middleware para permitir requisições CORS
app.use('/api/users', userRouter); // Roteamento para /api/users

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor API rodando na porta ${PORT}`);
});
