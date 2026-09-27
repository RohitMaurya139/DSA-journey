/**
 * Selection Sort (in-place)
 *
 * Idea: har pass me baaki (unprocessed) part ka sabse chhota element dhoondte
 * hain aur use current index `i` pe le aate hain. Isse har pass ke end me ek
 * element permanently apni final jagah pe fix ho jaata hai.
 *
 * Time  : O(n^2) - nested loops, har pass me poora baaki part scan hota hai
 * Space : O(1)  - koi extra array nahi banta, sab kuch `arr` me hi hota hai
 *
 * @param {number[]} arr numbers ka array (same reference me sort hota hai)
 * @returns {number[]} sorted array (wahi same reference jo input tha)
 */
function selectionSort(arr) {
  // `i` = wo index jaha is pass me minimum element daalna hai.
  // Aakhri index ko chhod sakte hain kyunki jab 1 element bacha ho woh sorted hi hota hai.
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i]; // abhi tak ka sabse chhota element
    let key = -1; // us minimum ka index (-1 = abhi koi minimum mila nahi)
    let swapped = false; // kya mujhe is pass me koi chhota element mila?

    // baaki poore part ko scan karo aur minimum dhundho
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j]; // naya minimum mila
        key = j; // aur uska index yaad rakhna zaroori hai
        swapped = true; // haan, swap karna padega
      }
    }

    // minimum mila hi nahi matlab `arr[i]` already sahi jagah hai, kuch mat chedo
    if (swapped) {
      let temp = arr[i];
      arr[i] = arr[key]; // minimum ko apni final jagah pe bithao
      arr[key] = temp; // aur `arr[i]` wale element ko uski jagah lelo
    }
  }

  // Return the same array reference, sorted in place
  return arr;
}

// Example: sorting [9,6,8,2,1,10,12,3] -> [1,2,3,6,8,9,10,12]
let arr = [9, 6, 8, 2, 1, 10, 12, 3];
let ans = selectionSort(arr);
console.log(ans);
