let x = [100, true, "Adrian", -3.6];
let my_obj = {
    "name": "Adrian",
    "isHappy": true,
    "favoriteNumber": 100
}

// Variation 1 of looping through an array
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}

// Variation 2 of looping through an array
for (const val of x) {
    console.log(val);
}

// for (const k in x) { // Another variation, but we're going through ALL the valid indexes - so k = 0, 1, 2, ...
//     console.log(x[k]);
// }

// Looping through an object
for (const key in my_obj) {
    console.log(my_obj[key]); // Grabbing the value linked to the current key in the object
}

// A second way
console.log(Object.keys(my_obj)); // Grab the keys in the object and return it as an array
for (const currentKey of Object.keys(my_obj)) {
    console.log(my_obj[currentKey]);
}

// my_obj.favoriteNumber // If you know the name of the key, you can use the dot notation like in this example