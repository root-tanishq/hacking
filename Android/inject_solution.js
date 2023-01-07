Java.perform(function () {
var checka = Java.use("com.tanaka.kun.injection.MainActivity");

checka.alwaysFalse.implementation = function() {
	var newReturnValue = true;
	return newReturnValue;
 };

});
console.log("Exploitation Done!!");