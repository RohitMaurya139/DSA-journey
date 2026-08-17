// pattern 1

//  * * * * * *
//  * * * * * *
//  * * * * * *
//  * * * * * *
//  * * * * * *
//  * * * * * *
// function starPattern(n) {

//     for (let i = 0; i <=n; i++) {

//         let row = ""
//         for (let j = 0; j <=n; j++) {
//             row= row + " *"
//         }
//         console.log(row);

//     }
// }

// starPattern(9)
//------------------------------------------------------------------
// pattern 2
//  *
//  * *
//  * * *
//  * * * *
//  * * * * *
//  * * * * * *
// function starPattern(n) {
//   for (let i = 0; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//       row = row + " *";
//     }
//     console.log(row);
//   }
// }

// starPattern(5);

//----------------------------------------------------------------------------
// pattern 3
//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5
// function numStarPattern(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <=i; j++) {
//       row = row + " " +j;
//     }
//     console.log(row);
//   }
// }

// numStarPattern(5);

//-------------------------------------------------------------------------------
//Pattern 4
//  1
//  2 2
//  3 3 3
//  4 4 4 4
//  5 5 5 5 5
// function numStarPattern(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row = row + " " + i;
//     }
//     console.log(row);
//   }
// }

// numStarPattern(5);

//------------------------------------------------------------------------------
