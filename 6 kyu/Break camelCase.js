/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  const arr = string.split("").map((el) => {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return arr.join("");
}
