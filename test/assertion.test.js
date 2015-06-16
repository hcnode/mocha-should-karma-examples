try {
	var should = require("should");
	var domain = require("../assertion/assertion_email");
}catch(e){}
describe('some tests', function(){
	it('test email', function(){
		"harry@163.com".should.be.a.email;
	});
	it('test domain', function(){
		"harry@163.com".should.be.the.domain("163.com");
	});
});
