/* 
Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
*/

function countRepeats(str) {
  const arr = str.split('').filter((el, index, array) => el !== array[index + 1]);
  return str.length - arr.length;
}