const https = require('https');
const osmosis = require('osmosis');

function getFromURL(
  url = 'https://www.astrology.com/numerology/angel-numbers/33-meaning'
) {
  https.get(url, (res) => {
    const rawData = [];
    res.on('data', (c) => rawData.push(c));
    res.on('end', () => {
      parseHTML(Buffer.concat(rawData).toString());
    });
  });
}

function parseHTML(html) {
  // const doc = new Document();
  console.log(html);
}
