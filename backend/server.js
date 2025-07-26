const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
 }));

// "static files" apparently; they are stored on the server and sent to the client when requested
app.use('/images/home/top_banner', express.static(path.join(__dirname, '/home/top_banner/')));

app.get('/api/top_banner_images', (req, res) => {
  const dirPath = path.join(__dirname, '/home/top_banner/');
  fs.readdir(dirPath, (err, files) => {
    if (err) return res.status(500).send('Unable to scan directory');
    const imageUrls = files.map(file => `/images/home/top_banner/${file}`);
    res.json(imageUrls);
  });
});

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
