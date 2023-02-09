/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

// function test(){
// 	const result = Array.from(elements);
// result.reverse()
// return result;
// }
// test();
// let elements = document.querySelectorAll('.item');
// const result = Array.from(elements);
// result.reverse()
// console.log(result); // => [div#root, div.page-wrapper.document-page, ...]

// const timePartBlock = document.querySelector('.umatch-matches grid-style');

//         for (i = 0; i < result.length; i++) {

// 			timePartBlock.innerHTML = `${result[i]}`;  data += '<div class="reserv__date" >' + dateDay + ' ' + dateMonth + '</div>';

//             }

let parent = document.querySelector("#parent");

let p = document.createElement("p");
p.innerHTML = "!";

parent.appendChild(p);

let elements = document.querySelectorAll(".item");
const cont = document.querySelector(".umatch-matches grid-style");
const elementDiv = document.createElement("div");
elementDiv.classList.add("test");
cont.appendChild(elementDiv);
const elDiv = documentquerySelector(".test");
const result = Array.from(elements);
result.reverse();

function test1() {
  for (i = 0; i < result.length; i++) {
    elDiv.innerHTML = `${result[i]}`;
  }
}
test1();

window.onload = () => {
  let elements = document.querySelectorAll(".item");
  const container = document.querySelector(".umatch-matches");
  const elementDiv = document.createElement("div");
  elementDiv.classList.add("newdiv");
  container.appendChild(elementDiv);
  const elDiv = document.querySelector(".newdiv");
  const result = Array.from(elements);
  result.reverse();

  function test1() {
    for (i = 0; i < elements.length; i++) {
      elDiv.innerHTML = `${result[i].outerHTML}`;
    }
  }
  test1();
};
