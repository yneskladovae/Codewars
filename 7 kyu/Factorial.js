/* 
Your task is to write function factorial.
*/

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}