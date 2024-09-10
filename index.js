const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const barangRoutes = require('./routes/barang');
const barangjnsRoutes = require('./routes/barangjns');

app.use('/api', barangRoutes);
app.use('/api', barangjnsRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Selamat datang di API Stok Barang');
});

// Start server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
