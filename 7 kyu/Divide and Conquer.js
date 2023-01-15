/* 
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.
*/

function divCon(x) {
  let numSum = 0;
  let strSum = 0;

  x.map((a) => {
    typeof a == "number" ? (numSum += a) : (strSum += +a);
  });

  return numSum - strSum;
}


