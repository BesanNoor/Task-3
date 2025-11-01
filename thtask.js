//ביסאם פרח 211861208
//נור צובח 214459463

const arr = [0, 3, -2, 0, 4, 0, 1];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  count += arr[i] === 0 ? 1 : 0;
}

console.log("The amount of zeros is: ", count);
