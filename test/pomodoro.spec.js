var assert = require('assert');
var should = require('chai').should();
var Pomodoro =  require('../lib/pomodoro');

describe('Pomodoro', function () {
    console.log("Pomodoro", Pomodoro);

    describe('add', function(){

        it('should return first charachter of the string', function () {
            assert.equal("Hello".charAt(0), 'H');
            //throw {myError:'throwing error to fail test'}
        });

    });
});
