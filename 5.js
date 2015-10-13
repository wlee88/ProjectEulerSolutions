// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// Train of Thought: 
// loop numbers, invidually checking each number whether they all are divisible 
// from numbers 1..limit without a hitch.
function smallestNumberDivisibleByAllNumbersUpTo(limit) {
    var currentNumber = 2;
    var found = true;
    function divisibleByAllNumbersUpTo(number, limit) {
        for (var i = 1; i <= limit; i++) {
            //console.log(`checking ${limit} % ${i} != 0`);
            if (number % i != 0){
                return false;   
            }
        };
        return true;
    };
    while (true) {
        
        if (divisibleByAllNumbersUpTo(currentNumber, limit))
            {
                return currentNumber;
            }
        else {    
                currentNumber++;
            }
    }
}
            
            
console.time("solution");
console.log(smallestNumberDivisibleByAllNumbersUpTo(20));
console.timeEnd("solution");