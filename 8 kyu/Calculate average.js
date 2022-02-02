/* 
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function find_average(array) {
  if (array === []) return 0;
  return array.reduce((res, n) => res + n) / array.length;
}