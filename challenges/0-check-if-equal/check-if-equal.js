/*
function:
=========
name: isEqual

parameters:
	- NUM_ONE: number
	- NUM_TWO: number

return: boolean
*/ 
function isEqual(numOne, numTwo) {
     return numOne === numTwo

}


//test cases
console.log("is equal(4,4):", isEqual(4,4), "expected true")
console.log("is equal(5,4):", isEqual(5,4), "expected false")
console.log("is equal(-4,4):", isEqual(-4,4), "expected false")
console.log("is equal(3000,3000):", isEqual(3000,3000), "expected true")