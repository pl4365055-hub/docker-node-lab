const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Helle from Docker Development8!' ,
    node: process.version
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});