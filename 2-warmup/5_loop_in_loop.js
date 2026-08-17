// ---------------------------------------------------------------------------
// NESTED LOOPS (LOOP INSIDE A LOOP)
// ---------------------------------------------------------------------------
// The outer loop controls the rows, the inner loop controls the columns.
// For each value of i, the inner loop runs completely from 0 to 4.
// Total iterations = outer * inner = 5 * 5 = 25
// Time Complexity: O(n * m)

for (let i = 0; i < 5; i++) {
   for (let j = 0; j < 5; j++) {
    console.log(`i = ${i} , j = ${j}`);
   }
}
