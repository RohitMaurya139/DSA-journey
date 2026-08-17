let arr = [10,10,5];

function secondLargest(a) {
  if (a.length < 2) {
    return null
  }
    let max = -Infinity;
    let secMax= -Infinity
    
  for (let i = 0; i < a.length; i++) {
    if (a[i] >max) {
        secMax = max;
        max=a[i]
    } else if (secMax < a[i] && a[i]< max) {
        secMax=a[i]
        
    }
  }

  return secMax;
}

let ans = secondLargest(arr);

console.log(`Second largest number in the array is ${ans}`);
