
/**
 * Created by harry on 15/6/16.
 */
function add(a, b) {
	return a + b;
}
function times(a, b) {
	return a * b;
}
var Util = { // test coverage
	addOrTimes : function(a, b, type){
		if(type == "+") {
			return add(a, b);
		}else if(type == "*"){
			return times(a, b);
		}else{
			throw new Error("unknow operation");
		}
	}
};
try{
	module.exports = Util;
}catch(e){}