'use strict';
let first_list = [12, 14, 42, 33, 67, 72, 87, 93];
let even_array = [];
function even(first_list) {
  for (let x of first_list) {
    if (x % 2 === 0) {
      even_array.push(x);
    }
  }

}
even(first_list);
console.log(first_list);
console.log(even_array);