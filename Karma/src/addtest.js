import assert from 'assert';
import add from 'index';
describe('Add', function() {
    it('should return sum', function() {
        assert.equal(20, add(10, 10));
    });
});