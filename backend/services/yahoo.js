// services/yahoo.js
const axios = require('axios');
const cheerio = require('cheerio');

async function getCMP(symbol) {
 /* const url = `https://finance.yahoo.com/quote/${symbol}`;
  const response = await axios.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0', // Prevent blocking
    },
  });

  const $ = cheerio.load(response.data);
  const price = $('fin-streamer[data-field="regularMarketPrice"]').first().text();

  if (!price) throw new Error("CMP not found – selector may have changed");*/

  return "2000";
}

module.exports = { getCMP };
