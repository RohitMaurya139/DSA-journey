/**
 * Insertion Sort (in-place)
 *
 * Idea: array ko left se right scan karte hain aur har naye element ko uske
 * left side ke "already sorted" part me sahi jagah daal dete hain. Element ko
 * bhi right shift karte rehte hain (jaise cards ko haath me khichte hain) aur
 * jab sahi jagah mil jaaye use wahin rakh dete hain.
 *
 * Isse har iteration ke end me ek element permanently apni final jagah pe
 * fix ho jaata hai, aur sorted part hamesha array ke shuru me rehta hai.
 *
 * Time  : O(n^2) - worst case, reverse sorted input (har element poora left
 *         part scan karta hai)
 *         O(n)   - best case, already sorted input (while loop ek baar bhi
 *         nahi chalta, `elem < arr[pre]` turant false ho jaata hai)
 * Space : O(1)  - koi extra array nahi banta, sab kuch `arr` me hi hota hai
 * Stability: strict `<` use karte hain (`<=` nahi), isliye equal elements ki
 *         apni relative order bani rehti hai
 *
 * @param {number[]} arr numbers ka array (same reference me sort hota hai)
 * @returns {number[]} sorted array (wahi same reference jo input tha)
 */
function insertionSort(arr) {
  // `i` = wo index jiska element abhi sorted part me daalna hai.
  // Index 0 se start nahi karte kyunki 1 element khud se sorted hota hai.
  for (let i = 1; i < arr.length; i++) {
    let pre = i - 1; // left neighbour, sorted part ki last position
    let elem = arr[i]; // ye element ko daalna hai, ise aage har baar overwrite karenge

    // Jab tak left neighbour bada hai, use ek jagah right shift karte jao.
    // `pre >= 0` zaroori hai warna array ke aage se bahar challe jayenge.
    while (pre >= 0 && elem < arr[pre]) {
      arr[pre + 1] = arr[pre] // bade element ko ek step right karo
      pre-- // aur ek aur left neighbour dekho
    }

    // Loop rukne ke baad `pre + 1` hi `elem` ki sahi position hai:
    // ya to `pre == -1` (elem sabse chhota hai, shuru me chala gaya)
    // ya `pre` wala element chhota/equal hai aur loop ruk chuka hai.
    arr[pre + 1] = elem
  }

  // Return the same array reference, sorted in place
  return arr
}

// Example: sorting [9,6,8,2,1,10,12,3] -> [1,2,3,6,8,9,10,12]
let arr = [9, 6, 8, 2, 1, 10, 12, 3]
let ans = insertionSort(arr)
console.log(ans);
