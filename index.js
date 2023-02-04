// 1. Exercise
function calculator(str) {
	return eval(str);
}

// 2. Exercise
function greeting(name){
	if (name == "Shola"){
		return "Hello, my love!"
	} else{
		return "Hello, " + name + "!";
	}
}
// 3. Exercise
function comp(str1, str2) {
	if(str1.length === str2.length){
		return true;
	}else{
		return false;
	}
}
// 4. Exercise

function isEmpty(s) {
	if (s === ""){
		return true;
	} else{
		return false;
	}
}
// 5.
function length(str) {
	return str.length;
}
// 6.
function stringInt(str) {
	return parseInt(str);
}
// 7.
function concatName(firstName, lastName) {
	return lastName + ", " + firstName;
}
// 8.
function eq(evaluate) {
	return eval(evaluate);
}
// 9.
function addition(a, b) {
	return a + b;
}
// 10.
function convert(minutes) {
	return minutes * 60;
}
