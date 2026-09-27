/**
 * Merge Sort (in-place)
 *
 * Idea: array ko baar baar aadha (left half / right half) karke dono halves ko
 * recursively sort karte hain, phir unhe `merge()` se ek me jod dete hain.
 * Ye "divide & conquer" ka classic example hai - problem ko chhote-chhote
 * sorted parts me todna, phir unhe sahi order me chipkana.
 *
 * `mergeSort` khud array ko sort nahi karta, wo sirf range ko aadha karta hai.
 * Asli kaam `merge` karta hai jo do sorted halves ko ek sorted range me likhta hai.
 *
 * Time  : O(n log n) - har level pe poora array ek baar process hota hai aur
 *         log n levels bante hain. Ye best, worst aur average teeno cases me
 *         same rehta hai (best case me bhi O(n log n), bubble/insertion se behtar)
 * Space : O(n)  - har `merge` call apna ek `result` array banata hai, isliye ye
 *         O(1) wale bubble/selection/insertion jaise "constant space" wala sort
 *         nahi hai. Ye uss price ka badle lekin stable sort deta hai
 * Recursion depth : O(log n)
 * Stability: line `arr[i] <= arr[j]` me `<=` use karte hain (`<` nahi), isliye
 *         equal elements ki apni relative order bani rehti hai
 *
 * @param {number[]} arr numbers ka array (same reference me sort hota hai)
 * @param {number} left  range ka starting index (inclusive)
 * @param {number} mid   range ka beech ka index, left half ke last element tak
 * @param {number} right range ka last index (inclusive)
 * @returns {void} kuch return nahi karta, sorted values `arr` me likh deta hai
 */
function merge(arr, left, mid, right) {
    // `result` ek naya temporary array hai - isme sorted values bharenge,
    // aur last me wapas `arr` me copy kar denge (neeche dekho)
    let result = []
    let i = left      // left half ka pointer, `mid` tak chalega
    let j = mid + 1   // right half ka pointer, `right` tak chalega
    let k = 0         // `result` me likhne ke liye current position

    // Dono halves ke beech se chhota element uthakar `result` me daalo
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            result[k] = arr[i]
            i++
            k++
        } else {
            // Yahan `arr[i] > arr[j]` already pakka hai (upar ka `else`),
            // isliye dobara check karne ki zaroorat nahi
            result[k] = arr[j]
            j++
            k++
        }
    }

    // Ek side khatam ho gaya, lekin doosre side me elements abhi bache hue hain.
    // Jaise [1,2,3,4] aur [5] ko merge karte waqt left side khatam ho jayega
    // par right side ka `5` bacha hoga - use bhi copy karna padega
    if (i <= mid) {
        // left side me kuch bacha hai
        while (i <= mid) {
            result[k] = arr[i]
            i++
            k++
        }
    } else {
        // right side me kuch bacha hai
        while (j <= right) {
            result[k] = arr[j]
            j++
            k++
        }
    }

    // >>> SABSE IMPORTANT LINE <<<
    // `result` me sorted values hain, par wo ek naya array hai - `arr` ko
    // abhi tak chhua nahi gaya. Agar yahan copy-back nahi kiya to sorted data
    // yahin khatam ho jayega aur `arr` bilkul waisa hi rahega jo pehle tha.
    // `result.length` hamesha `right - left + 1` hota hai, isliye loop sirf
    // isi range ko overwrite karta hai, baaki array safe rehta hai
    for (let t = 0; t < result.length; t++) {
        arr[left + t] = result[t]
    }
}

/**
 * Merge Sort driver - recursion yahi karta hai
 *
 * @param {number[]} arr numbers ka array (same reference me sort hota hai)
 * @param {number} left  range ka starting index (inclusive)
 * @param {number} right range ka last index (inclusive)
 * @returns {number[]} sorted array (wahi same reference jo input tha)
 */
function mergeSort(arr, left, right) {
    // BASE CASE: range me 0 ya 1 element hai, wo khud se sorted hai.
    // `left >= right` likha hai (ya `left == right` nahi) kyunki:
    //  - `left == right` -> ek element, sorted
    //  - `left > right`  -> khaali range (jaise empty array me `0 > -1`), sorted
    // Dhyan do: `arr.length == 1` check karna GALAT hota hai, kyunki yahan
    // recursion array length pe nahi, INDEX RANGE pe kaam karti hai. `arr.length`
    // hamesha poore array ka hota hai, kabhi range ka nahi - isliye wo guard
    // kabhi trigger nahi hota aur recursion kabhi nahi rukti (stack overflow)
    if (left >= right) return arr

    let mid = Math.floor((left + right) / 2)

    // LEFT HALF ko sort karo
    mergeSort(arr, left, mid)
    // RIGHT HALF ko sort karo
    mergeSort(arr, mid + 1, right)
    // Dono sorted halves ko `arr` ke andar hi merge karo.
    // Yahan merge ka return value ki zaroorat nahi - wo khud `arr` me likhta hai
    merge(arr, left, mid, right)

    // Return the same array reference, sorted in place
    return arr
}

// Example: sorting [9,6,8,2,1,10,12,3] -> [1,2,3,6,8,9,10,12]
let arr = [9, 6, 8, 2, 1, 10, 12, 3];
let ans = mergeSort(arr, 0, arr.length - 1);
console.log(ans);
