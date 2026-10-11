const http = require('http');
const assert = require('assert');
const app = require('./app');

const server = app.listen(0, () => {
  const port = server.address().port;
  http.get('http://localhost:' + port + '/status', (res) => {
    let body = '';
    res.on('data', (chunk) => (body += chunk));
    res.on('end', () => {
      const data = JSON.parse(body);
      assert.strictEqual(res.statusCode, 200);
      assert.strictEqual(data.status, 'FAIL');
      console.log('Test passed');
      server.close();
    });
  });
});
