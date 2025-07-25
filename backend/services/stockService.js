require('dotenv').config();
const axios = require('axios');

const SHEET_URL = process.env.SHEET_URL;

async function getStocks() {
  const response = await axios.get(SHEET_URL);
  const data = response.data;

  return data.map((row) => ({
    name: row.Name,
    symbol: row.Symbol,
    qty: parseFloat(row.Qty),
    purchasePrice: parseFloat(row.Purchase),
    cmp: parseFloat(row.CMP),
    investment: parseFloat(row.Investment),
    presentValue: parseFloat(row.PresentValue),
    gainLoss: parseFloat(row.GainLoss),
    peRatio: parseFloat(row.PE) || 0,
    latestEarnings: parseFloat(row.Earnings) || 0,
    sector: row.Sector,
    exchange: row.Exchange,
    portfolioPercent: parseFloat(row.PortfolioPercent),
  }));
}

module.exports = { getStocks };