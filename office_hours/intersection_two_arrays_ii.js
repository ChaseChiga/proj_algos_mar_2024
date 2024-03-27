var intersect = function(nums1, nums2) {
    /* Peer-led code - wasn't finished, but it's a start */
    // let foundValues = {}; // Hash map
    // let intersection =[]
    // let idx = nums2.length
    // // Loop through the first
    // for (let k = 0; k < nums1.length; k++) {
    //     if(nums1[k] == nums2[idx]){
    //         intersection.push(nums1[k])

    //     }
    //     if(idx == 0 || k == nums1.length){
    //         return intersection;
    //     }
    //     else {
    //         idx--;
    //     }
    // }
    /* Adrian's solution */
    let nums1ValueFreqMap = {}; // Count how many times each value appears in the first array: key-value pairs will be "itemInArray": numberOfItemsItIsFound
    let intersection = []; // Hold all the values that appear in BOTH arrays
    // Fill out the frequency map for first array....
    for (let k = 0; k < nums1.length; k++) {
        const curVal = nums1[k];
        if (curVal in nums1ValueFreqMap) { // If value already found, increase its frequency by 1
            nums1ValueFreqMap[curVal]++;
        } else { // New value - so create new key-value pair with a frequency of 1
            nums1ValueFreqMap[curVal] = 1;
        }
    }
    console.log("Frequency hash map for first array:");
    console.log(nums1ValueFreqMap);
    // Loop through the second array...
    for (let p = 0; p < nums2.length; p++) {
        const curVal = nums2[p];
        console.log(`Examining the value ${curVal} from the second array`);
        if (curVal in nums1ValueFreqMap) { // Value from second array is in the first array
            console.log(`We have found the value ${curVal} in both arrays, so adding to intersection`);
            intersection.push(curVal); // Add to intersection
            console.log("Intersection now is:");
            console.log(intersection);
            nums1ValueFreqMap[curVal]--; // Decrease the frequency - think of the freq. as how many occurrences of that value from the first array are available
            console.log("Remaining frequencies (values) from first array");
            console.log(nums1ValueFreqMap);
            if (nums1ValueFreqMap[curVal] === 0) { // If we're out of this value from the first array
                console.log(`We're now out of ${curVal}s in the first array, so removing from hash map`);
                delete nums1ValueFreqMap[curVal]; // Remove this value from consideration
            }
        }
    }
    return intersection;
};