/*

Parens Valid
Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. 
Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, 
because the underlined ")" is premature: there is nothing open for it to close.

*/

function areParensValid(inputStr) {
    // let parensArr = []; // Turns out we didn't need an array, but you can solve it with an array
    let parensCounter = 0; // Keeps track of the number of UNPAIRED "(" essentially
    // Loop to go through the string, one character at a time
    for (let k = 0; k < inputStr.length; k++) {
        let curChar = inputStr[k];
        // if (curChar == "(" || curChar == ")") {
        //     parensArr.push(curChar);
        //     // console.log(parensArr);
        // }
        if (curChar == "(") { // Increase the counter if we find a "("
            parensCounter++;
        } else if (curChar == ")") { // Decrease the counter if we have a ")"
            parensCounter--;
        }
        if (parensCounter < 0) { // After accounting for the "(" and ")", if the counter goes negative (i.e. we have an unpaired ")"), this is invalid
            return false;
        }
    }
    return parensCounter == 0; // We check to see if we have no unpaired parentheses
}
// Various test cases
console.log(areParensValid("Y(3(p)p(3)r)s"));
console.log(areParensValid("N(0(p)3"));
console.log(areParensValid("N(0)t )0(k"));
console.log(areParensValid(")("));
console.log(areParensValid("())())"));
console.log(areParensValid("()))"));
console.log(areParensValid("()()"));
console.log(areParensValid("(())"));
console.log(areParensValid(""));
console.log(areParensValid("hello"));

