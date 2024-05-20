const express = require('express');
const cors = require('cors');
const https = require('https');
const {API_V2_TICKERS, POLONIEX_API_V2_TICKERS} = require("../API/consts");

const app = express();

app.use(cors());

app.get(API_V2_TICKERS, (req, res) => {
  https.get(POLONIEX_API_V2_TICKERS, (apiRes) => {
    let data = '';

    apiRes.on('data', (chunk) => {
      data += chunk;
    });

    apiRes.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  }).on('error', (err) => {
    console.error('Ошибка:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Произошла ошибка при выполнении запроса');
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
