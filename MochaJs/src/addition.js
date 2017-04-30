var exports = module.exports;
exports.add = function(numbers) {
    if (numbers) {
        return numbers.reduce(function(one, two) {
            return one + two;
        });
    } else {
        throw "Invalid Input Data";
    }
}