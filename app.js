const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/dhinakaran', (req, res) => {
  res.send('Hello, dhinakaran!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export for testing