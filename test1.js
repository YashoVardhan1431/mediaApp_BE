function dominantElement(arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      let max = arr[i];
      for (let j = 0; j < n; j++) {
        if (i != j && arr[j] > max) {
          max = arr[j];
        }
      }
      if (max == arr[i]) {
        count++;
      }
    }
    return count;
  }
  
  var n = 5;
  var arr = [5, 1, 4, 3, 2];
  
  var numDominantElements = dominantElement(arr, n);
  
  console.log(numDominantElements); // 2
  
  
