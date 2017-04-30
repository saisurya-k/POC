var assert = require('assert');
var Browser = require('zombie');

var browser = new Browser();

describe('Index Page', function() {
    it('sample', function(done) {
        browser.visit('http://localhost:8080/app/index.html', function() {
            assert.ok(browser.success);
            done();
        });
    });
});