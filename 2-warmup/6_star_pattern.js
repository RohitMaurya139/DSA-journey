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
// note : isme j i times chalta hai
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
//pattern 5
// note : isme i n times chalta hai and j i times chalta hai
//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1

// function numStarPattern(n) {
//   for (let i = n; i>0; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row = row + " " + j;
//     }
//     console.log(row);
//   }
// }

// numStarPattern(5);

//---------------------------------------------------------------------------
// pattern 6
// note : isme i n times chalta hai and j i times chalta hai
//  * * * * *
//  * * * *
//  * * *
//  * *
//  *
// function starPattern(n) {
//   for (let i = n; i > 0; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row = row + " *";
//     }
//     console.log(row);
//   }
// }

// starPattern(5);

//------------------------------------------------------------------
//pattern 7
//     *
//    **
//   ***
//  ****
// *****
// function reverseStartPattern(n){
//     for (let i = 1; i <=n; i++) {
//         let row = ""
//         for (let k = 1; k <=n-i; k++) {
//             row+=" "
            
//         }
//         for (let j = 1; j <=i; j++) {
//             row += "*"
            
//         }
//         console.log(row);
        
        
//     }
// }

// reverseStartPattern(5)


//----------------------------------------------------------
