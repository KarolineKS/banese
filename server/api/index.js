const express = require('express');
const usersRouter = require('./routes/user.js');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use('/api/users', usersRouter);
app.use(cors());

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
