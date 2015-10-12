// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the 
// even-valued terms.

// Train of thought:
// - Implement the fibonachi sequence algorithm.
// - loop through the fibonachi sequence.
// -- if the term returned by the funciton is even, add it to the counter.

"use strict";

function fibonacci(sequenceNumber) {
    if (sequenceNumber < 2) {
        return 1;
    } else {
        return fibonacci(sequenceNumber - 1) + fibonacci(sequenceNumber - 2);
    }
}

function sumOfEvenFibonacciNumbers(limit) {
    var sumOfEvenFibs = 0;
    var currentFoundFibonacciTerm = 0;
    var counter = 1;
    while (true) {
        currentFoundFibonacciTerm = fibonacci(counter);
        //console.log(`Found fibonacci: ${currentFoundFibonacciTerm}`);
        if (currentFoundFibonacciTerm > limit) {
          //  console.log(`The found fibonacci number: ${currentFoundFibonacciTerm} was greater than the limit: ${limit}`)
            return sumOfEvenFibs;
        } else {
            if (currentFoundFibonacciTerm % 2 == 0) {
                sumOfEvenFibs += currentFoundFibonacciTerm;
               // console.log(`Even Fibonacci ${currentFoundFibonacciTerm} being added to total`);
                //console.log(`Total is now: ${sumOfEvenFibs}`);
            }
            counter++;
        }
    }
}
console.log(`The Answer is: ${sumOfEvenFibonacciNumbers(4000000)}`);
