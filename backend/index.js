const express = require('express');
const cors = require('cors');
const stockRoutes = require('./routes/stockRoutes');

const app = express();
app.use(cors());
app.use('/api/stocks', stockRoutes);

module.exports = app; // ✅ export for Vercel

// ✅ Only listen locally
if (require.main === module) {
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });
}
