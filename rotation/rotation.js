function rotate(arr, r) {
    let copyArr = arr.map(item => item);
    let rotation = r;
    if (r == 0) { 
      return arr;
    }
    if (r > arr.length) {
      rotation = r % arr.length;
    }
    for (let i = 0; i<arr.length; i++) {
      if (arr[i] == copyArr[copyArr.length - 1]) {
        arr[i] = copyArr[0];
      } 
      else {
        arr[i] = copyArr[i+1];
      }
    }
    
    if (rotation > 1) {
      rotate(arr, rotation-1);
    }
    return arr;
  }
  const array = ["Joe", "Bob", "Garfield", "Leaf", "Red", "Al"];
  console.log(rotate(array, 1000));