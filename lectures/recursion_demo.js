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
        // console.log(`Base case reached at row ${row} and position ${position} - returning 1`)
        return 1;
    }
    // console.log(`Calculating the left term for ${row} and position ${position} at row ${row-1} and position ${position - 1}`);
    const leftValue = pascalsTriangle(row-1, position-1); // Recursive step
    // console.log(`Left value above row ${row} and position ${position} is ${leftValue}`);
    // console.log(`Calculating the right term for ${row} and position ${position} at row ${row-1} and position ${position}`);
    const rightValue = pascalsTriangle(row-1,position); // Recursive step
    // console.log(`Right value above row ${row} and position ${position} is ${rightValue}`);
    // console.log(`Returning the value ${leftValue + rightValue} at row ${row} and position ${position}`);
    return leftValue + rightValue;
}

console.log(pascalsTriangle(3,2)); // Easier to visualize
console.log(pascalsTriangle(5,3)); // More complicated example