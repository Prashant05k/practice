let string = "abc";
//a
// ba ab
// cba cab bca acb bac abc

function getPermutations(str) {
  let arr = [];
  let newArr = [];
  let addArr = [];
  let c = 0;

  arr.push(str[0]);

  for (let i = 1; i < 2; i++) {
    // arr.length = 0;
    // arr.push(str[i-1]);
    for (let j = 0; j <= i; j++) {
      newArr = [...newArr, ...arr];
    }
    console.log("newArr", newArr);
    for (let k = 0; k < newArr.length; k++) {
      addArr.push(str[k] + newArr[k]);
    }
  }
  console.log(addArr);
}
getPermutations(string);

// let arr = ["a", 'b'];
// let newArr = [];

// newArr = [...newArr, ...arr];
// newArr = [...newArr, ...arr];

// console.log(newArr);
