/*
-------------- FIND INDEX OF NUMBER------------------------
let arr = [3, 4, 6, 7, 8, 9, 12, 13, 16, 82]

function find(a,num) {
    
    for (let i = 0; i < a.length; i++){
        if(a[i]===num){
            return i
        }
    }

    return -1
}

let ans = find(arr, 13)

if (ans<0) {
    console.log("element not found in the array");
    
}
else {
    console.log(`element found at index ${ans}`);
    
}
*/
//----------------------------------------------------------------------------
/*
-------------- COUNT NEGATIVE NUMBER------------------------
let arr = [3, 4, 6, -7, -8, 9, 12, -13, 16, 82];

function countNegative(a) {
    let count = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      count++
    }
  }

  return count;
}

let ans = countNegative(arr);


  console.log(`count of negative number is ${ans}`);
*/
//-----------------------------------------------------------
/*

-------------- FIND LARGEST NUMBER------------------------
let arr = [5,0,10,8,17,100];

function largestnum(a) {
    let max= -Infinity
    
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max) {
      max=a[i];
    }
  }

  return max;
}

let ans = largestnum(arr);

console.log(`largest number in the array is ${ans}`);
*/

//--------------------------------------------------------

//-------------- FIND SMALLEST NUMBER------------------------
let arr = [5, 0, 10, -8, 17, 100];

function smallestnum(a) {
  let min = Infinity;

  for (let i = 1; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }
  }

  return min;
}

let ans = smallestnum(arr);

console.log(`largest number in the array is ${ans}`);
