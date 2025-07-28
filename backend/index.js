// backend/index.js
const express = require('express');
const cors = require('cors');
const stockRoutes = require('./routes/stockRoutes');

const app = express();
app.use(cors());
app.use('/api/stocks', stockRoutes);

// ✅ Export for Vercel
module.exports = app;

// ✅ Run locally if executed directly
if (require.main === module) {
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`✅ Backend running locally at http://localhost:${PORT}`);
  });
}
