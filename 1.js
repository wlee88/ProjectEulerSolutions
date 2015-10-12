//  Problem:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// train of thought: 
/*
	We can iterate all the numbers < 1000. 
	- with each number we ask if it is divisible by 3 or 5. 
	- If yes add it to the total variable.

	More efficient but would probably result in even more code

	- Add all multiples of three and stop when the multiple is greater than 999
	- Do the same for multiples of 5.
	- sum the two totals.
*/

"use strict";
(function() {
    function sumOfMultiplesOf3Or5(limit) {
        var total = 0;
        for (var i = 1; i < limit; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                total += i
            }
        }
        return total;
    }
    var limit = 100
    var sum = sumOfMultiplesOf3Or5(limit);
    console.log(`values up to ${limit} is: ${sum}`);
}());
