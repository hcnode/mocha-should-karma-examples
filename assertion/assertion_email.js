var Assertion;
try{
	Assertion = Should.Assertion;
}catch(e){
	Assertion = require("should").Assertion;
}
Assertion.add('email', function(domain) {
	this.params = { operator: 'to be email'};

	this.obj.should.be.a.String;
	this.assert(/^[a-zA-Z0-9_\\.]+@[a-zA-Z0-9-]+[\\.a-zA-Z]+$/.test(this.obj));
}, true);
Assertion.add('domain', function(domain) {
	this.params = { operator: 'to have domain ' + domain };

	this.obj.should.be.a.String;
	this.obj.indexOf("@").should.be.greaterThan(0).and.not.be.equal(this.obj.length - 1);
	this.obj.split("@")[1].should.be.equal(domain);
});
