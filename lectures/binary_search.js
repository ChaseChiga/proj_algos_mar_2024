const binarySearch = (arr, value) => { // arr MUST be sorted in ascending order; value is what we're searching for
    let leftIndex = 0; // Left end of window for binary search
    let rightIndex = arr.length - 1; // Right end of window for binary search
    // The binary search operation itself
    while (leftIndex <= rightIndex) {
        let pivotIndex = Math.floor((leftIndex+rightIndex)/2); // Midpoint index, rounded down - this will be our pivot index
        if (value < arr[pivotIndex]) { // If value we're searching for is smaller than that at the pivot index
            rightIndex = pivotIndex - 1;
        } else if (value > arr[pivotIndex]) { // If value we're searching for is bigger than that at the pivot index
            leftIndex = pivotIndex + 1;
        } else { // The value we want is at the pivot index, so return this index and we're done!
            return pivotIndex;
        }
    }
    return -1; // Value can't be found in array
}

console.log(binarySearch([1, 5, 10, 14, 18, 25, 33, 40], 33)); // Search for 33
console.log(binarySearch([1, 5, 10, 14, 18, 25, 33, 40], 18)); // Search for 18
console.log(binarySearch([1, 5, 10, 14, 18, 25, 33, 40], 12)); // Search for 12 - it doesn't exist, so return index of -1