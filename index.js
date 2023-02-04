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



// Peeling an orange: First, do we have an orange?  If not, I'm going to take one out of the fridge.  We now have the orange.  Then I'm going to see if it has already been peeled.  If it is peeled, I'm going to eat it.  If it isn't peeled, I'm going to remove a chunk of the rind.  At this point, I'm going to see if it's peeled.  If it isn't I'm going to remove another chunk of the rind.  I'll keep doing this until the orange is peeled.

// Do we have an orange? - conditional coming up
//     We do not have the orange: - conditional (boolean test: does orange exist)
//         Take out the orange - function
// We now have the orange - comment
// Is it peeled? - conditional coming up
//     If it is peeled - conditional, situation 1 (number test: number of pieces of rind left === 0)
//         You're done!  Eat it! - function
//     If it is not peeled  - conditional, situation 2 (number test: number of pieces of rind left > 0)
//         As long as it is not peeled - loop (number test: while(number of rind pieces > 0))
//             Remove a chunk of rind - function
//         The orange is now peeled - comment
//         You're done!  Eat it! - function


let isOrangeExist = true;
function eat(){

}

if(isOrangeExist === true){
	function peel(){

	}
	peel();

} else{
	function getFromRef(){

	}
	getFromRef();
}
let isOrangePelled = true;
let rind = 1;

if(isOrangePelled){
  eat();

}else{
	while(rind > 0){
		removeRind();
	}
	function removeRind(){
		rind--;
	}
	eat();
} 























































