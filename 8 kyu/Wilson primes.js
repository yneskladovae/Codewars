/*
Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

function amIWilson(p) {
    function f(n) {
        return n <= 1 ? 1 : n * f(n - 1);
    }

    return (f(p - 1) + 1) / (p * p) % 1 === 0;
}