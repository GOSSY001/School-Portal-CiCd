const express = require('express');
const app = express();

// IMPORTANT: Use Render's PORT or 3000 for local
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.get('/', (req, res) => {
  res.send('School Portal CI/CD is Live');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
