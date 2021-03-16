function combine(arr1,arr2) {
    let result = [];

    result.push(...arr2.slice(0));
    result.push(...arr1);
    result.push(...arr2.slice(arr1, arr2.length));

    return result;
}

console.log(combine([11,22,33], [1,2,3]));













