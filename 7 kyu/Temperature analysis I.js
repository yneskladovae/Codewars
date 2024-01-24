/* 
You were given a string of integer temperature values.
Create a function lowest_temp(t) and return the lowest value or None/null/Nothing if the string is empty.
*/

function lowestTemp(t) {
  if (!t) return null;
  const temperatures = t.split(' ').map(Number);
  return Math.min(...temperatures);
}