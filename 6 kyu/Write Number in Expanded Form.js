/* 
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

function expandedForm(num) {
  let arr = String(num).split("");
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * 10 ** (arr.length - i - 1));
  }
  return res.filter((item) => item > 0).join(" + ");
}
