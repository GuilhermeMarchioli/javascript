function dobroArray(arr) {
    let novoArray = [];  

    for (let i = 0; i < arr.length; i++) {
        novoArray.push(arr[i] * 2);
    }
    return novoArray;
}

console.log(dobroArray([6, 89, 3]));
