//import { helloTest } from '../src/hello-test';
import { expect, assert } from 'chai';
import 'mocha';

const fetch = require("node-fetch");
const port = process.env.PORT || 3000;


describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});
describe('Second suite of tests', function(){
    describe('Sanity check', function() {
        it('should return 200/http OK', function () {
            const sanity_url = "http://127.0.0.1:${port}";
            console.log(sanity_url);
            // fetch(sanity_url)
            //     .then(data => {
            //         return data.json()
            //     })
            //     .then(res => {
            //         console.log(res)
            //         assert.equal(res.toString(), '200');
            //     });
        });
    });
});

/*
const exchnge_url = "https://api.exchangeratesapi.io/latest?symbols=USD,GBP&base=USD";
fetch(exchnge_url)
    .then(data => {return data.json()})
    .then(res => {console.log(res)});
*/


