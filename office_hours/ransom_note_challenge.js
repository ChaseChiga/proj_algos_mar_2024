const ransomNoteChallenge = (ransomNote, magazine) => {
    // Make a hash map (table) where we keep track of how many times each letter appears in the note
    let ransomHashMap = {};
    for (let ind in ransomNote) {
        const curChar = ransomNote[ind]; // Grab current character
        if (curChar in ransomHashMap) { // Alternately, if (randomHashMap.hasOwnProperty(curChar))
            ransomHashMap[curChar] += 1; // Increment frequency
        } else { // New letter
            ransomHashMap[curChar] = 1; // Start off with frequency of 1
        }
    }
    // Make a hash map (table) where we keep track of how many times each letter appears in the magazine
    let magazineHashMap = {};
    for (let ind in magazine) {
        const curChar = magazine[ind]; // Grab current character
        if (curChar in magazineHashMap) { // Alternately, if (randomHashMap.hasOwnProperty(curChar))
            magazineHashMap[curChar] += 1; // Increment frequency
        } else { // New letter
            magazineHashMap[curChar] = 1; // Start off with frequency of 1
        }
    }
    // Visuals of the frequencies of each letter in the ransom note and the hash map (commented out)
    // console.log(ransomHashMap);
    // console.log(magazineHashMap);

    // Loop through the note's hash map and check to see whether the letter is found 
    // in the magazine, and if so, does it appear enough times?
    for (let ransomChar in ransomHashMap) {
        // console.log(ransomChar); // Current character in the hash map
        // Ransom note letter does NOT appear in magazine -OR- it doesn't appear enough times
        if (!magazineHashMap.hasOwnProperty(ransomChar) || ransomHashMap[ransomChar] > magazineHashMap[ransomChar]) {
            return false;
        }
    }
    return true; // Every letter's found, and appears enough times in the magazine
}