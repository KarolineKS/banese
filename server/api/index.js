const express = require('express');
const usersRouter = require('./routes/user');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use('/api/users', usersRouter);
app.get('/api/users', (req, res) => {
  res.json({ok: true});
}
);
app.use(cors());

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
