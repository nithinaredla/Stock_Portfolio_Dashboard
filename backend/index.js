require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stockRoutes = require('./routes/stockRoutes');

const app = express();
app.use(cors());
app.use('/api/stocks', stockRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Backend running at http://localhost:${PORT}`));

