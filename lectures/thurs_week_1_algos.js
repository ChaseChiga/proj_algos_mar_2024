/*
Remove Range
Given array, and indices start and end, remove vals in that index range, working in-place 
(hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.
*/

const removeRange = (arr, start, end) => { // function removeRange(arr,start,end)
    let leftInd = start;
    // Move values from the right part of the array to the left, replacing the values we're removing
    for (let rightInd = end + 1; rightInd < arr.length; rightInd++) {
        console.log(`Moving the value ${arr[rightInd]} at index ${rightInd} to index ${leftInd}`)
        // Move the value from right to left
        arr[leftInd] = arr[rightInd];
        leftInd++; // Move the left index
        console.log("Modified array is:");
        console.log(arr);
    }
    // Chop off the excess values by shortening the length of the array
    arr.length -= end - start + 1; // Alternate approach: arr.length = leftInd;
    console.log("Chopped array is:");
    console.log(arr);
    return arr;
}

// Some test cases
const arr1 = [20,30,40,50,60,70];
const arr2 = [3, 10, 15, 22, 35];
const arr3 = [1, 8, 3, -5];
const arr4 = [-3,2.4,1.5,true,"Blue",11];

removeRange(arr1,2,4); // [20, 30, 70]
removeRange(arr2,0,1); // [15, 22, 35]
removeRange(arr3,0,3); // []
removeRange(arr4,3,5); // [-3, 2.4, 1.5]