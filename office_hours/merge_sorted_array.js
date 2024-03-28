var merge = function(nums1, m, nums2, n) {
    // Pointers for where we are in terms of index in each array
    let pointer1 = m-1;
    let pointer2 = n-1;
    let currentIndex = m + n - 1;
    // Go through both arrays
    while (pointer2 >= 0 && pointer1 >= 0) {
        console.log(`Pointer 1 = ${pointer1}; its value is ${nums1[pointer1]}`);
        console.log(`Pointer 2 = ${pointer2}; its value is ${nums2[pointer2]}`);
        // Item in second array is bigger than (or tied with) the first array
        if (nums2[pointer2] >= nums1[pointer1]) {
            console.log(`Grabbing the value ${nums2[pointer2]} from nums2`);
            nums1[currentIndex] = nums2[pointer2];
            pointer2--;
        } else {
            console.log(`Grabbing the value ${nums1[pointer1]} from nums1`);
            nums1[currentIndex] = nums1[pointer1];
            pointer1--;
        }
        currentIndex--;
        console.log("The nums1 array now is:");
        console.log(nums1);
    }
    console.log(`Pointer 1 = ${pointer1}, pointer 2 = ${pointer2}`);
    console.log(nums1);
    // Going through second array, if any values are left
    if (pointer2 >= 0) {
        console.log("Still values left from second array");
        while (pointer2 >= 0) {
            console.log(`Grabbing the value ${nums2[pointer2]} at index ${pointer2} from nums2 and putting it in nums1`);
            nums1[currentIndex] = nums2[pointer2];
            console.log("The nums1 array now is:");
            console.log(nums1);
            pointer2--;
            currentIndex--;
        }
    }
    console.log(`Pointer 1 = ${pointer1}, pointer 2 = ${pointer2}`);
};