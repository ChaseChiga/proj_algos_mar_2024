// LeetCode problem: https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

// This is NOT an efficient solution, but it does work
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