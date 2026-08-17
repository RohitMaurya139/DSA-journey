// ---------------------------------------------------------------------------
// STAR / NUMBER PATTERNS USING NESTED LOOPS
// ---------------------------------------------------------------------------
// Pattern problems help build intuition for nested loops in DSA.
// Key idea: outer loop = rows, inner loop = columns per row.

// ---------------------------------------------------------------------------
// PATTERN 1: Rectangle of stars (n x n grid)
//  * * * * * *
//  * * * * * *
//  * * * * * *
//  * * * * * *
//  * * * * * *
//  * * * * * *
// Each row has exactly n stars (inner loop runs n times every row).
/*
function starPattern(n) {
    for (let i = 0; i <= n; i++) {
        let row = "";
        for (let j = 0; j <= n; j++) {
            row = row + " *";
        }
        console.log(row);
    }
}
starPattern(9);
*/

// ---------------------------------------------------------------------------
// PATTERN 2: Right triangle (row i has i+1 stars)
//  *
//  * *
//  * * *
//  * * * *
//  * * * * *
//  * * * * * *
// Inner loop runs i times so each row grows by one star.
/*
function starPattern(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + " *";
    }
    console.log(row);
  }
}
starPattern(5);
*/

// ---------------------------------------------------------------------------
// PATTERN 3: Number triangle (print column index j)
//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5
// Each row prints numbers from 1 to i.
/*
function numStarPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + " " + j;
    }
    console.log(row);
  }
}
numStarPattern(5);
*/

// ---------------------------------------------------------------------------
// PATTERN 4: Repeat row number (print row index i, i times)
//  1
//  2 2
//  3 3 3
//  4 4 4 4
//  5 5 5 5 5
// Inner loop runs i times, printing the same value i each time.
/*
function numStarPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + " " + i;
    }
    console.log(row);
  }
}
numStarPattern(5);
*/

// ---------------------------------------------------------------------------
// PATTERN 5: Inverted number triangle (outer counts down)
//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1
// Outer loop goes from n down to 1, inner prints 1..i.
/*
function numStarPattern(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + " " + j;
    }
    console.log(row);
  }
}
numStarPattern(5);
*/

// ---------------------------------------------------------------------------
// PATTERN 6: Inverted star triangle
//  * * * * *
//  * * * *
//  * * *
//  * *
//  *
// Outer loop counts down, inner loop prints i stars per row.
/*
function starPattern(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + " *";
    }
    console.log(row);
  }
}
starPattern(5);
*/

// ---------------------------------------------------------------------------
// PATTERN 7: Pyramid (spaces before stars for center alignment)
//     *
//    **
//   ***
//  ****
// *****
// First loop adds (n-i) leading spaces, second loop adds i stars.
/*
function reverseStartPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let k = 1; k <= n - i; k++) {
            row += " ";       // leading spaces
        }
        for (let j = 1; j <= i; j++) {
            row += "*";       // stars after spaces
        }
        console.log(row);
    }
}
reverseStartPattern(5);
*/

// ---------------------------------------------------------------------------
// PATTERN 8: Alternating 1s and 0s (two approaches)
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// Uses a boolean toggle to flip between 1 and 0 each iteration.
/*
function specialPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let bool = true;
    for (let j = 0; j < i; j++) {
      row += Number(bool) + " ";
      bool = !bool;  // toggle between true/false
    }
    console.log(row);
  }
}

// Type 2: Same pattern using ternary instead of boolean toggle
function newSpecialPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let bool = 1;
    for (let j = 0; j < i; j++) {
      row += bool + " ";
      bool = bool === 1 ? 0 : 1;  // flip between 0 and 1
    }
    console.log(row);
  }
}
specialPattern(6);
newSpecialPattern(6);
*/

// ---------------------------------------------------------------------------
// PATTERN 9: Alternating 1s and 0s (global toggle persists across rows)
// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1
// The toggle variable is declared outside the function so its state
// carries over between rows, creating a checkerboard-like pattern.
let bool = 1;
function newSpecialPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += bool + " ";
      bool = bool === 1 ? 0 : 1;  // flip each iteration
    }
    console.log(row);
  }
}

newSpecialPattern(6);
