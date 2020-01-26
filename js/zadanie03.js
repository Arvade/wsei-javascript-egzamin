function bigestSumOfTwoElements(arr) {
    if(arr.length === 0) return false;
    if(arr.length === 1) return arr[0];

    const sortedArr = arr.sort().reverse();

    return sortedArr[0] + sortedArr[1];
}