/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/
function isIsogram(str) {
    const arr = str.toLowerCase().split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter(el => el === arr[i]).length > 1) {
            return false;
        }
    }
    return true;
}