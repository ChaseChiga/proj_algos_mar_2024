const containsDuplicate = nums => {
    const allFoundValues = {} // Hash map holding all the values we have found
    // Loop through the array
    for (let k = 0; k < nums.length; k++) {
        const curValue = nums[k]; // Current value we're examining
        // Check to see if the value is in the hash map - if so, return true
        if (curValue in allFoundValues) {
            // console.log(`Duplicate of ${curValue} found!`);
            return true;
        } else { // Value is NOT in hash map, so add it
            allFoundValues[curValue] = true; // "true" is an arbitrary time
            // console.log(`All found values now is, with the new value of ${curValue}:`);
            // console.log(allFoundValues);
        }
    }
    // console.log("No duplicates!  Returning false");
    // Return false if we make it through the loop with no duplicates found
    return false;
};