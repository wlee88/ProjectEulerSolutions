// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?




function getPrimeFactorsFor(limit) {
	primeFactors = [];
	d = 2
	while (limit > 1) {
		while(limit % d == 0) {
			console.log(`(${limit} % ${d} == 0) is true`);
			primeFactors.push(d);
			console.log(`pushing ${d} onto primeFactors`);
			limit /= d;
			console.log(`limit now equals ${limit}`);
		}
		d++;
		console.log(`d is now ${d}`);
		if (d*d > limit) {
			if (limit > 1) {
				console.log(`${d} * ${d} is > ${limit} so pushing ${limit}`);
				primeFactors.push(limit);
				break;
			}
		}

	}
	return primeFactors;
}

console.time("solution");
var limit = 56;
var primes = getPrimeFactorsFor(limit);
console.log("largest Prime for " + limit + " is: " + primes[primes.length -1]);
console.timeEnd("solution");
