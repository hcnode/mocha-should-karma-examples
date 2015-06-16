/**
 * Created by harry on 15/6/16.
 */
try {
	var should = require("should");
	var Util = require("../src/util");
}catch(e){}
describe('addOrTimes tests', function(){
	it('test add', function(){
		Util.addOrTimes(1, 2, "+").should.be.equal(3);
	});
	it('test times', function(){
		Util.addOrTimes(3, 2, "*").should.be.equal(6);
	});
	it('test know operation', function(){
		(function(){
			Util.addOrTimes(1, 2);
		}).should.throw();
	});
});
