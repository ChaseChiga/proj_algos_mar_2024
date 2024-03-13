class Phone {
    constructor(number, os, size) { // Called when creating a Phone
        this.number = number; // Attributes
        this.os = os;
        this.size = size;
        this.apps = []; // Default attribute
    }

    // Methods in this class
    call(otherNumber) {
        console.log(`Now calling ${otherNumber}`);
    }

    // Adding app to array
    install(newApp) {
        this.apps.push(newApp);
    }
}

// Demoing methods and constructor
const myPhone = new Phone("555-1234","Android",8);
console.log(myPhone.number);
myPhone.call("555-5555");
myPhone.install("Google Sheets");
console.log(myPhone.apps)