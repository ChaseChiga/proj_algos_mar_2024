// LeetCode problem: https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

// This is NOT an efficient solution, but it does work - it times out in one long test case
var numberOfSubstrings = function(s) {
    let validSubstringCount = 0; // How many times we find a substring with all 3 characters
    // Indexes representing the starting and ending point of our window
    let leftIndex = 0;
    let rightIndex = 2;
    // While the right end of the window hasn't passed the end of the string
    while (rightIndex < s.length) {
        // Use a set to keep track of letters we've found
        let allFoundLetters = new Set();
        // Loop through the window to see if each letter appears at least once
        for (let curInd = leftIndex; curInd <= rightIndex; curInd++) {
            const curChar = s[curInd];
            // Check to see if the letter has already been found, and if NOT, then add it
            if (!allFoundLetters.has(curChar)) {
                allFoundLetters.add(curChar);
            }
            // if (allFoundLetters.size === 3) {
            //     break;
            // }
        }
        // If we have found all 3 letters, then we have a valid substring - along with
        // any letter that comes afterwards
        if (allFoundLetters.size === 3) {
            // console.log(`Left index = ${leftIndex}, right index = ${rightIndex}`)
            validSubstringCount += s.length - rightIndex;
            // Shrink the window on the left and next time we'll check again
            leftIndex++;
        } else { // We don't have all 3 letters, so expand the window on the right
            rightIndex++;
        }
    }
    return validSubstringCount;
};

// Slightly faster, but not fast enough - still times out
var numberOfSubstringsV2 = function(s) {
    let validSubstringCount = 0; // How many times we find a substring with all 3 characters
    // Indexes representing the starting and ending point of our window
    let leftIndex = 0;
    let rightIndex = 2;
    let lastCheckedIndex = 0; // NEW: Will represent starting point to check where to start searching for letters
    let allFoundLetters = new Set(); // MOVED outside while loop statement
    while (rightIndex < s.length) {
        // Loop through the window to see if each letter appears at least once
        // console.log(`Starting index = ${lastCheckedIndex}`);
        // console.log(allFoundLetters);
        for (let curInd = lastCheckedIndex; curInd <= rightIndex; curInd++) { // REPLACED starting statement with "lastCheckedIndex" instead of "leftIndex"
            const curChar = s[curInd];
            // Check to see if the letter has already been found, and if NOT, then add it
            if (!allFoundLetters.has(curChar)) {
                allFoundLetters.add(curChar);
            }
            // if (allFoundLetters.size === 3) {
            //     break;
            // }
        }
        // If we have found all 3 letters, then we have a valid substring - along with
        // any letter that comes afterwards
        if (allFoundLetters.size === 3) {
            // console.log(`Left index = ${leftIndex}, right index = ${rightIndex}`)
            validSubstringCount += s.length - rightIndex;
            // Shrink the window on the left and next time we'll check again
            leftIndex++;
            // Restart set from scratch as we start with a new window in terms of starting index
            lastCheckedIndex = leftIndex; 
            allFoundLetters.clear(); 
        } else { // We don't have all 3 letters, so expand the window on the right
            rightIndex++;
            lastCheckedIndex = rightIndex; // Only need to check the newest letter instead of all letters when we loop next
        }
    }
    return validSubstringCount;
};

/*
Version 3: Uses O(n) space, but now is O(n) time - this was ACCEPTED!
We use subarrays to keep track of when each letter is found, and then figure out the smallest window size that has all 3 letters,
with the left index for the window changing each time.
*/
var numberOfSubstrings = function(s) {
    let validSubstringCount = 0; // How many times we find a substring with all 3 characters
    // Each subarray represents the indexes where we can find "a", "b" and "c", respectively
    let indArr = [[],[],[]];
    let curIndArr = [0,0,0]; // Where the first instance of "a", "b" and "c" will be in terms of index
    // Save index of each character
    for (let k = 0; k < s.length; k++) {
        const curChar = s[k];
        // Switch statement based on what character we have
        switch(curChar) {
            case "a":
                indArr[0].push(k);
                break;
            case "b":
                indArr[1].push(k);
                break;
            case "c":
                indArr[2].push(k);
                break;
        }
    }
    // console.log(indArr);
    // Edge case: no "a", "b" or "c" found anywhere in the original string
    if (indArr[0].length === 0 || indArr[1].length === 0 || indArr[2].length === 0) {
        return 0;
    }
    // Now figure out smallest window for each left index and calculate number of substrings accordingly
    for (let leftIndex = 0; leftIndex < s.length - 2; leftIndex++) {
        // Find latest first instance of "a", "b" or "c" - this is the right end of the window
        let rightIndex = Math.max(indArr[0][curIndArr[0]],indArr[1][curIndArr[1]],indArr[2][curIndArr[2]]);
        // console.log(`Left index = ${leftIndex}, right index = ${rightIndex}`);
        // console.log(curIndArr); 
        // console.log([indArr[0][curIndArr[0]],indArr[1][curIndArr[1]],indArr[2][curIndArr[2]]]); // [first index of "a", first index of "b", first index of "c"] in this current window
        // Calculate number of substrings we can form, starting with the current window
        validSubstringCount += s.length - rightIndex;
        // Now figure out which index to increment, depending on which letter came first in the window
        if (indArr[0][curIndArr[0]] === leftIndex) {
            curIndArr[0]++; // "a" at start of window, so now remove that from play by incrementing this index
            if (curIndArr[0] >= indArr[0].length) { // If we're out of "a"s, we're done
                break;
            }
        } else if (indArr[1][curIndArr[1]] === leftIndex) {
            curIndArr[1]++; // "b" at start of window, so now remove that from play by incrementing this index
            if (curIndArr[1] >= indArr[1].length) { // If we're out of "b"s
                break;
            }
        } else {
            curIndArr[2]++; // "c" at start of window, so now remove that from play by incrementing this index
            if (curIndArr[2] >= indArr[2].length) { // If we're out of "c"s
                break;
            }
        }
    }
    return validSubstringCount;
};