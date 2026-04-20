const http = require('http');
const assert = require('assert');
const server = require('./server');

describe('HTTP Server', function() {
  before(function() {
    this.server = server;
  });

  after(function() {
    this.server.close();
  });

  it('should return 200 status code', function(done) {
    http.get('http://localhost:3000/', function(res) {
      assert.equal(res.statusCode, 200);
      done();
    });
  });

  it('should return "Hello, World!"', function(done) {
    http.get('http://localhost:3000/', function(res) {
      let data = '';
      res.on('data', function(chunk) {
        data += chunk;
      });
      res.on('end', function() {
        assert.equal(data, 'Hello, World!\n');
        done();
      });
    });
  });
});