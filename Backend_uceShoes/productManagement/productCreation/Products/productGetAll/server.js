const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/getAllProductsRoute'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
