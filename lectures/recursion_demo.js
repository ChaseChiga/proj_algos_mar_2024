// Basic demo of recursion
const countdown = val => {
    if (val <= 0) { // Base case - the stopping point
        console.log("Liftoff!");
        return; // To stop the recursion
    }
    console.log(val);
    countdown(val-1); // Recursive step - notice we go down by one
}

// countdown(10);

// Demo of recursion with Pascal's Triangle
const pascalsTriangle = (row, position) => {
    if (row < 1 || position < 1) {
        return 0
    }
    // BASE CASES: If we're at the right end of the triangle in this row 
    // OR the left end of the triangle in this row, then we'll return 1
    if (row === position || position === 1) {
        console.log(`Base case reached at row ${row} and position ${position} - returning 1`)
        return 1;
    }
    console.log(`Calculating the left term for ${row} and position ${position} at row ${row-1} and position ${position - 1}`);
    const leftValue = pascalsTriangle(row-1, position-1); // Recursive step
    console.log(`Left value above row ${row} and position ${position} is ${leftValue}`);
    console.log(`Calculating the right term for ${row} and position ${position} at row ${row-1} and position ${position}`);
    const rightValue = pascalsTriangle(row-1,position); // Recursive step
    console.log(`Right value above row ${row} and position ${position} is ${rightValue}`);
    console.log(`Returning the value ${leftValue + rightValue} at row ${row} and position ${position}`);
    return leftValue + rightValue;
}

// console.log(pascalsTriangle(3,2)); // Easier to visualize
// console.log(pascalsTriangle(5,3)); // More complicated example
// console.log(pascalsTriangle(40, 17)); // Takes FOREVER

// Demo of recursion with Pascal's Triangle - now with a memo called "calculatedValues" that
// will hold the values in the terms we've calculated (other than the base cases that have a "1")
const pascalsTriangleV2 = (row, position, calculatedValues = {}) => {
    if (row < 1 || position < 1) {
        return 0
    }
    // BASE CASES: If we're at the right end of the triangle in this row 
    // OR the left end of the triangle in this row, then we'll return 1
    if (row === position || position === 1) {
        console.log(`Base case reached at row ${row} and position ${position} - returning 1`)
        return 1;
    }
    // Now we determine whether we need to calculate each value or if we already did, just grab it
    // from our memo, which is the object called "calculatedValues"
    let leftValue;
    let leftKey = `${row-1},${position-1}`;
    if (!calculatedValues.hasOwnProperty(leftKey)) {
        console.log(`Calculating the term recursively at row ${row-1} and position ${position-1}`);
        calculatedValues[leftKey] = pascalsTriangleV2(row-1, position-1, calculatedValues); // Recursive step
    } else {
        console.log(`Grabbing the term already calculated at row ${row-1} and position ${position-1}`);
    }
    leftValue = calculatedValues[leftKey];
    let rightValue;
    let rightKey = `${row-1},${position}`;
    if (!calculatedValues.hasOwnProperty(rightKey)) {
        console.log(`Calculating the term recursively at row ${row-1} and position ${position}`);
        calculatedValues[rightKey] = pascalsTriangleV2(row-1, position, calculatedValues); // Recursive step
    } else {
        console.log(`Grabbing the term already calculated at row ${row-1} and position ${position}`);
    }
    rightValue = calculatedValues[rightKey];
    console.log(`Returning the value at row ${row} and position ${position}`)
    return leftValue + rightValue;
}
console.log(pascalsTriangleV2(3,2));
console.log(pascalsTriangleV2(5,3)); 
console.log(pascalsTriangleV2(40, 17)); // MUCH faster now!

// console.log("Fifth row of Pascal's triangle")
// const pascalTriangleObj = {} // Hold on to terms as we call this function multiple times to speed it up significantly
// for (let k = 1; k <= 5; k++) {
//     console.log(pascalsTriangleV2(5,k,pascalTriangleObj));
// }

// Demo of the Fibonacci sequence - with a memo called "calculatedTerms"
const fibonacciV1 = (ind, calculatedTerms = {}) => {
    // Base case:
    if (ind <= 1) { // 0th term is 0, 1st term is 1
        console.log(`Returning the term at index ${ind} - base case`);
        return ind;
    } else {
        let leftTerm, rightTerm;
        if (!calculatedTerms.hasOwnProperty(ind-1)) {
            console.log(`Calculating the term at index ${ind-1} recursively`);
            calculatedTerms[ind-1] = fibonacciV1(ind-1, calculatedTerms);
        } else {
            console.log(`Grabbing the term at index ${ind-1} that was calculated already`);
        }
        leftTerm = calculatedTerms[ind-1];
        if (!calculatedTerms.hasOwnProperty(ind-2)) {
            console.log(`Calculating the term at index ${ind-2} recursively`);
            calculatedTerms[ind-2] = fibonacciV1(ind-2, calculatedTerms);
        } else {
            console.log(`Grabbing the term at index ${ind-2} that was calculated already`);
        }
        rightTerm = calculatedTerms[ind-2];
        console.log(`Returning the term at index ${ind}`)
        return leftTerm + rightTerm;
    }
}

// console.log(fibonacciV1(10));
// console.log(fibonacciV1(20));
// console.log(fibonacciV1(30));
// console.log(fibonacciV1(40));
// console.log(fibonacciV1(50));