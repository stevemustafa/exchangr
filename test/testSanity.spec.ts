//import { helloTest } from '../src/hello-test';
import { expect, assert } from 'chai';
import 'mocha';
const fetch = require("node-fetch");


describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('Sanity check', function() {

});

const sanity_url = "https://api.exchangeratesapi.io/latest?symbols=USD,GBP&base=USD";
fetch(sanity_url)
    .then(data => {return data.json()})
    .then(res => {console.log(res)});