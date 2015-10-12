//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is // 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Train of thought:

// Loop through all products of all 3 numbers. keep track of only numbers which are palindromes.

// adds naive reverse to String
String.prototype.reverse=function(){return this.split("").reverse().join("");}

var limit = 1000

function Palindrome() {
	this.set1 = 0;
	this.set2 = 0;
	this.palindrome = 0;
}
function findLargestPalindromeFor(limit) {
	var largestFoundPalindrome = new Palindrome;
	var currentProduct = 0;

	for (var set1 = limit; set1 > 0; set1--) {
		for (var set2 = limit; set2 > 0; set2--) {
			currentProduct = set1 * set2;
			if (String(currentProduct) == String(currentProduct).reverse()){
				if (largestFoundPalindrome.palindrome < currentProduct){
					largestFoundPalindrome = {set1: set1, set2: set2, palindrome: currentProduct
					};
				}
			}
		}
	}
	return largestFoundPalindrome;
}

console.time("solution");
var palindrome = findLargestPalindromeFor(1000);
console.log(`largest palindrome: (${palindrome.set1} * ${palindrome.set2}) = ${palindrome.palindrome}`);
console.timeEnd("solution");