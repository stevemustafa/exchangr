"use strict";
exports.__esModule = true;
//import { helloTest } from '../src/hello-test';
var chai_1 = require("chai");
require("mocha");
var fetch = require("node-fetch");
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            chai_1.assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});
describe('Sanity check', function () {
});
var sanity_url = "https://api.exchangeratesapi.io/latest?symbols=USD,GBP&base=USD";
fetch(sanity_url)
    .then(function (data) { return data.json(); })
    .then(function (res) { console.log(res); });
