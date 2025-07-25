const express = require('express');
const { getStocks } = require('../services/stockService');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const stocks = await getStocks();
    res.json(stocks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

module.exports = router;