const express = require('express');
const app = express();
const certificateRoutes = require('./routes/certificateRoutes');
require('dotenv').config();

// Middleware
app.use(express.json());

// Use the certificate routes with the '/certificates' prefix
app.use('/certificates', certificateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});