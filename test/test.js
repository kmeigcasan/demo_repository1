const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const Numbers = require('../codes/numbers');

describe("Numbers Model", function(){

    it("Return the expected return value on success", function(){
        let num = new Numbers();
        let param = "2,4,5,6";
        let result = num.getEven(param);
        console.log(result);
        expect(result).to.deep.equal(["2","4","6"]);
    });
    
    it("Return an error message if string passed has no even numbers", function(){
        let num = new Numbers();
        let param = "1,3,5";
        let result = num.getEven(param);

        expect(result).to.be.empty;
    });
});
