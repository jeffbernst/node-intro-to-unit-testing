const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should fizz-buzz', function() {
    const normalCases = [
      [15, 'fizz-buzz'],
      [5, 'buzz'],
      [3, 'fizz'],
      [30, 'fizz-buzz'],
      [25, 'buzz'],
      [18, 'fizz']
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input[0]);
      answer.should.equal(input[1]);
    });
  });

  it('should throw error if passed a non-number', function() {
    const badInputs = ['hello', 'testing', true, undefined];

    badInputs.forEach(function(input) {
      (function() {
        fizzBuzzer(input);
      }.should.throw(Error));
    });
  });
});
