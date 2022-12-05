function rotate(arr, r) {
    // let copyArr = arr.map(item => item);
    let rotation = r;
    let temp = arr[0];

    if (r == 0) return arr;

    if (r > arr.length) rotation = r % arr.length;

    for (let i = 0; i<arr.length; i++) {
      if (i == arr.length - 1) {
        arr[i] = temp;
      } 
      else {
        arr[i] = arr[i+1];
      }
    }
    
    if (rotation > 1) {
      rotate(arr, rotation-1);
    }
    return arr;
  }

  const array = ["Joe", "Joe", "Garfield", "Leaf", "Red", "Al"];
  console.log(rotate(array, 2));