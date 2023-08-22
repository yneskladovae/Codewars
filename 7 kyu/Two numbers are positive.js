/* 
Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.
*/

function twoArePositive(a, b, c) {
  const positiveCount = [a, b, c].filter(num => num > 0).length;
  return positiveCount === 2;
}