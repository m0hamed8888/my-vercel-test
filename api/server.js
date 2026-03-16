const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({
    status: "Success",
    message: "مرحباً بك في الباك-أند على Vercel!",
    time: new Date().toISOString(),
    features: ["Node.js", "Express", "Serverless"]
  });
});

// هذا السطر ضروري ليعمل كـ Serverless Function
module.exports = app;
