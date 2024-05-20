const express = require('express');
const cors = require('cors');
const https = require('https');

const app = express();

app.use(cors());

app.get('/api/v2/tickers', (req, res) => {
  https.get('https://futures-api.poloniex.com/api/v2/tickers', (apiRes) => {
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
